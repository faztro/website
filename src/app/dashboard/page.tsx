"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { ApiResponse, Order } from "@/types/api.types";
import toast from "react-hot-toast";
import { isOrdersOpen } from "@/actions/get_open_orders/get_open_orders";

const STATUS_OPTIONS = [
  "all",
  "pending",
  "picked",
  "delivered",
  "cancelled",
] as const;
type StatusFilter = (typeof STATUS_OPTIONS)[number];

export default function Dashboard() {
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const { data: session } = useSession();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get<ApiResponse<Order[]>>(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/orders`,
          {
            headers: {
              Authorization: `Bearer ${session?.user?.accessToken || ""}`,
            },
          }
        );
        if (data.success && data.data) {
          setOrders(data.data);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    if (session) {
      fetchOrders();
    }
  }, [session]);

  const handleStatusUpdate = async (orderId: string, newStatus: string) => {
    try {
      const { data } = await axios.put<ApiResponse<Order>>(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/orders/${orderId}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${session?.user?.accessToken || ""}`,
          },
        }
      );

      if (data.success && orders) {
        setOrders(
          orders.map((order) =>
            order.id === orderId
              ? { ...order, status: newStatus as Order["status"] }
              : order
          )
        );
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const filteredOrders = orders?.filter((order) => {
    const matchesStatus =
      statusFilter === "all" || order.status === statusFilter;
    const matchesSearch =
      order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });
  const [isOrdersOpenState, setIsOrdersOpenState] = useState(true);

  useEffect(() => {
    isOrdersOpen().then((ordersOpen) => {
      setIsOrdersOpenState(ordersOpen);
    });
  }, []);

  const handleToggleOrders = async () => {
    const { data } = await axios.post<ApiResponse<{ ordersOpen: boolean }>>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/toggle_orders_open`
    );
    console.log(data);
    if (data.success && data.data) {
      setIsOrdersOpenState(data.data.ordersOpen);
      toast.success("Orders closed successfully");
    } else {
      toast.error("Failed to close orders");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-4 sm:py-8 max-w-7xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Orders Dashboard</h1>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search orders..."
            className="w-full sm:w-64 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
            className="w-full sm:w-auto px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 capitalize bg-white"
          >
            {STATUS_OPTIONS.map((status) => (
              <option key={status} value={status} className="capitalize">
                {status}
              </option>
            ))}
          </select>
          <button
            data-open={isOrdersOpenState}
            className={
              "w-full sm:w-auto px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 capitalize bg-white data-[open=true]:bg-red-500 data-[open=false]:bg-green-500"
            }
            onClick={handleToggleOrders}
          >
            {isOrdersOpenState ? "Close Orders" : "Open Orders"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
        {filteredOrders && filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-4">
                  <div className="flex justify-between items-start sm:block">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {order.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                      <a
                        href={`tel:${order.phone}`}
                        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 mt-1 group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span className="group-hover:underline">
                          {order.phone}
                        </span>
                      </a>
                    </div>
                    <span
                      className={`sm:hidden px-2 py-1 text-xs font-semibold rounded-full capitalize
                      ${
                        order.status === "delivered"
                          ? "bg-green-100 text-green-800"
                          : ""
                      }
                      ${
                        order.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : ""
                      }
                      ${
                        order.status === "picked"
                          ? "bg-blue-100 text-blue-800"
                          : ""
                      }
                      ${
                        order.status === "cancelled"
                          ? "bg-red-100 text-red-800"
                          : ""
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <span
                    className={`hidden sm:inline-block px-3 py-1 text-xs font-semibold rounded-full capitalize
                    ${
                      order.status === "delivered"
                        ? "bg-green-100 text-green-800"
                        : ""
                    }
                    ${
                      order.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : ""
                    }
                    ${
                      order.status === "picked"
                        ? "bg-blue-100 text-blue-800"
                        : ""
                    }
                    ${
                      order.status === "cancelled"
                        ? "bg-red-100 text-red-800"
                        : ""
                    }`}
                  >
                    {order.status}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1">
                      Items
                    </h4>
                    <p className="text-sm text-gray-600 break-words">
                      {order.items}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1 flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Pickup Location
                    </h4>
                    <p className="text-sm text-gray-600 break-words pl-5">
                      {order.pickup}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1 flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Delivery Location
                    </h4>
                    <p className="text-sm text-gray-600 break-words pl-5">
                      {order.delivery}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end pt-3 border-t">
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusUpdate(order.id, e.target.value)
                    }
                    className="w-full sm:w-auto px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 capitalize bg-white"
                  >
                    {STATUS_OPTIONS.slice(1).map((status) => (
                      <option
                        key={status}
                        value={status}
                        className="capitalize"
                      >
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-gray-500">
            No orders found
          </div>
        )}
      </div>
    </div>
  );
}
