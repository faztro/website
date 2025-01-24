"use client";

import { createOrder } from "@/actions";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";

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
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log(data);
      const response = await createOrder(data);
      console.log(response);
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="py-20 bg-[#F8FAFB]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-transparent bg-clip-text"
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

        <div className="">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
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
                  placeholder="List the items you need delivered"
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
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Request Delivery"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
