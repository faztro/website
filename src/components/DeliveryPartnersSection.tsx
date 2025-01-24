"use client";

import { motion } from "framer-motion";

const BENEFITS = [
  {
    icon: "⏰",
    title: "Flexible Working Hours",
    description:
      "Choose when you want to work and maintain your work-life balance",
  },
  {
    icon: "💰",
    title: "Competitive Payouts",
    description: "Earn competitive rates for every delivery you complete",
  },
  {
    icon: "🤝",
    title: "Empower Your Community",
    description: "Make a difference by helping others in your local area",
  },
];

export default function DeliveryPartnersSection() {
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
            Become a Local Hero with Faztro
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-600"
          >
            Join our community of trusted delivery partners and PTU students can
            be hired
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {BENEFITS.map((benefit, index) => (
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
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-[#032A2C] group-hover:text-[#00AFA1] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.a
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSfN19lMz7SP1rS5CyVzlXbDLqRgedujS4NmT_pae2E2TumilA/viewform?usp=dialog"
            }
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Join the Faztro Heroes
          </motion.a>
        </div>
      </div>
    </section>
  );
}
