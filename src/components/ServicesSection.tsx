"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: "🛒",
    title: "Groceries & Daily Essentials",
    description: "Get your daily necessities delivered to your doorstep",
  },
  {
    icon: "📑",
    title: "Documents",
    description: "Safe and secure delivery of your important documents",
  },
  {
    icon: "🍽️",
    title: "Restaurant & Food Pickup",
    description: "Your favorite food delivered fresh and hot",
  },
  {
    icon: "🎁",
    title: "Personalized & Custom Requests",
    description: "Custom delivery solutions for your unique needs",
  },
  {
    icon: "📦",
    title: "Efficient Handling of Bulk and Multi-Item Deliveries",
    description: "Efficient handling of multiple items and bulk orders",
  },
  {
    icon: "💊",
    title: "Fast and Reliable Medicine Delivery",
    description: "Reliable and timely delivery of prescription medications",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-transparent bg-clip-text"
          >
            Your Essentials, Delivered by Local Heroes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-600"
          >
            Everything you need, delivered with care
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#032A2C] to-[#00AFA1] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:transform group-hover:-translate-y-2 transition-transform">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-[#032A2C] group-hover:text-[#00AFA1] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
