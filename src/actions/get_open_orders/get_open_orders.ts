"use server";

import { ApiResponse } from "@/types/api.types";
import axios from "axios";

export const isOrdersOpen = async () => {
  const { data } = await axios.get<ApiResponse<{ ordersOpen: boolean }>>(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/orders_open`
  );
  if (data.success && data.data) {
    return data.data.ordersOpen;
  }
  return false;
};
