"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
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
            Empowering Communities, One Delivery at a Time
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Faztro is on a mission to simplify your life by connecting you with
            trusted local delivery partners – your everyday heroes. We believe
            in supporting communities while delivering convenience to your
            doorstep.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
