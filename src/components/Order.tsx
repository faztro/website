"use client";

import { createOrder } from "@/actions/orders/order";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { isOrdersOpen } from "@/actions/get_open_orders/get_open_orders";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
  items: z.string().min(5, "Please provide more details about the items"),
  pickup: z.string().min(10, "Please provide a complete pickup address"),
  delivery: z.string().min(10, "Please provide a complete delivery address"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<"success" | "error">("success");

  const [isOrdersOpenState, setIsOrdersOpenState] = useState(true);

  useEffect(() => {
    isOrdersOpen().then((ordersOpen) => {
      setIsOrdersOpenState(ordersOpen);
    });
  }, []);

  const onSubmit = async (data: FormData) => {
    if (!isOrdersOpenState) {
      setType("error");
      setMessage("Orders are currently closed. Please try again later.");
      setOpenModal(true);
      return;
    }
    try {
      console.log("Submitting form data:", data);
      const response = await createOrder(data);
      console.log("Server response:", response);

      // Always set the message and type before opening modal
      if (response.success) {
        setType("success");
        setMessage(response.message || "Order placed successfully!");
        reset(); // Reset form on success
      } else {
        setType("error");
        setMessage(
          response.message || "Failed to place order. Please try again."
        );
      }

      // Open modal after setting message and type
      setOpenModal(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setType("error");
      setMessage(
        "An error occurred while placing your order. Please try again."
      );
      setOpenModal(true);
    }
  };

  return (
    <section className="py-20 bg-[#F8FAFB]" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gradient"
          >
            Request a Delivery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-600"
          >
            Tell us what you need delivered
          </motion.p>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto"
          >
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00AFA1] focus:border-transparent outline-none"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00AFA1] focus:border-transparent outline-none"
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="items"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Items to Deliver
                </label>
                <textarea
                  id="items"
                  {...register("items")}
                  rows={3}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00AFA1] focus:border-transparent outline-none"
                  placeholder="Food, Grocery, Medicine, Gift, Daily Essentials, Printouts and etc..."
                />
                {errors.items && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.items.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="pickup"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Pickup Location
                </label>
                <textarea
                  id="pickup"
                  {...register("pickup")}
                  rows={3}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00AFA1] focus:border-transparent outline-none"
                  placeholder="Enter pickup address, please mention the shop name if you know"
                />
                {errors.pickup && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.pickup.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="delivery"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Delivery Address
                </label>
                <textarea
                  id="delivery"
                  {...register("delivery")}
                  rows={3}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00AFA1] focus:border-transparent outline-none"
                  placeholder="Enter the delivery address"
                />
                {errors.delivery && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.delivery.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !isOrdersOpenState}
                className="w-full px-8 py-4 gradient-primary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isOrdersOpenState
                  ? isSubmitting
                    ? "Submitting..."
                    : "Request Delivery"
                  : "Orders are closed"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 transition-all duration-300 ease-in-out data-[state=open]:animate-[fadeIn_300ms] data-[state=closed]:animate-[fadeOut_300ms] z-[100000]" />
          <Dialog.Content className="fixed left-[50%] top-[50%] w-[90%] md:w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 ease-in-out data-[state=open]:animate-[contentShow_300ms] data-[state=closed]:animate-[contentHide_300ms] z-[1000000]">
            <Dialog.Close className="absolute right-4 top-4 rounded-full p-1.5 text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <span className="sr-only">Close</span>
            </Dialog.Close>

            <div className="text-center">
              {type === "success" ? (
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              ) : (
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              )}
              <Dialog.Title
                className={`text-lg font-medium mb-2 ${
                  type === "success" ? "text-green-900" : "text-red-900"
                }`}
              >
                {type === "success" ? "Order Placed!" : "Error"}
              </Dialog.Title>
              <Dialog.Description className="text-sm text-gray-500">
                {message}
              </Dialog.Description>

              <div className="mt-6">
                <button
                  onClick={() => setOpenModal(false)}
                  className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white gradient-primary rounded-xl hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00AFA1]"
                >
                  Close
                </button>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
