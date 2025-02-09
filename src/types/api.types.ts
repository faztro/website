export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface Order {
  id: string;
  name: string;
  phone: string;
  pickup: string;
  items: string;
  delivery: string;
  status: "pending" | "picked" | "delivered" | "cancelled";
  createdAt: string;
  updatedAt: string;
  college: "PU" | "PTU";
}
