"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const FAQS = [
  {
    question: "What can I get delivered through Faztro?",
    answer:
      "From groceries and essentials to gifts and documents, Faztro handles it all. Some restrictions apply to hazardous or prohibited items.",
  },
  {
    question: "Who are Faztro's delivery partners?",
    answer:
      "Our local heroes are everyday individuals from your community, vetted and ready to assist you.",
  },
  {
    question: "How can I pay for my deliveries?",
    answer:
      "We offer secure payment options, including credit/debit cards, wallets, and UPI.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#F8FAFB]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-transparent bg-clip-text"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-600"
          >
            Got questions? We've got answers
          </motion.p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="font-semibold text-[#032A2C]">
                  {faq.question}
                </span>
                <span className="text-[#00AFA1]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
