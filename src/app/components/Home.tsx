"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, scaleIn } from "../animations";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f8ffff] to-white overflow-hidden">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full glass-effect z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <div className="relative h-12 w-12 bg-gradient-to-br from-[#032A2C] to-[#00AFA1] rounded-xl flex items-center justify-center shadow-lg">
                <Image
                  src="/faztro.png"
                  alt="Faztro Logo"
                  className="object-contain p-1.5"
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <span className="text-3xl font-bold text-gradient ml-3">
                Faztro
              </span>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#00AFA1] rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#032A2C] rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          />
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center">
            <motion.h1
              variants={fadeIn}
              initial="initial"
              animate="animate"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 tracking-tight leading-tight"
            >
              Your Affordable{" "}
              <span className="text-gradient">Delivery Partner</span>
              <br /> in <span className="text-gradient">Puducherry</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed"
            >
              Get anything delivered from anywhere within Puducherry at the most
              competitive rates.
            </motion.p>
            <motion.div
              variants={scaleIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect px-10 py-8 rounded-3xl shadow-2xl glow backdrop-blur-xl bg-white/30"
              >
                <div className="text-center">
                  <span className="text-2xl font-semibold block mb-3 text-gradient">
                    Launching Soon
                  </span>
                  <span className="text-5xl font-bold gradient-primary text-transparent bg-clip-text">
                    February 14
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative">
          <motion.h2
            variants={fadeIn}
            className="text-4xl sm:text-5xl font-bold text-center mb-20 text-gradient"
          >
            Why Choose Faztro?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Most Affordable",
                description:
                  "Lower prices than any other delivery service in Puducherry",
                icon: "💰",
              },
              {
                title: "Quick Delivery",
                description: "Fast and reliable delivery across Puducherry",
                icon: "⚡",
              },
              {
                title: "Multiple Pickups",
                description:
                  "Get items from multiple locations in a single delivery",
                icon: "📦",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="glass-effect p-10 rounded-3xl hover:shadow-xl transition-all duration-300 backdrop-blur-xl bg-white/30"
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-6xl mb-8"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 text-gradient">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-32 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeIn}
            className="text-4xl sm:text-5xl font-bold text-center mb-20 text-gradient"
          >
            How It Works
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                step: "1",
                title: "Place Order",
                description: "Tell us what you need and from where",
              },
              {
                step: "2",
                title: "Confirm Details",
                description: "We'll confirm the pickup and delivery locations",
              },
              {
                step: "3",
                title: "Track Delivery",
                description: "Real-time updates on your delivery status",
              },
              {
                step: "4",
                title: "Receive Items",
                description: "Get your items delivered to your doorstep",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 gradient-primary text-white text-3xl font-bold rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl"
                >
                  {step.step}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 text-gradient">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 gradient-primary opacity-95"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Be Among the First to Experience Faztro
            </h2>
            <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Coming soon to make deliveries affordable and accessible in
              Puducherry!
            </p>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#032A2C] text-gray-300 py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center mb-10">
              <div className="relative h-12 w-12 bg-gradient-to-br from-[#032A2C] to-[#00AFA1] rounded-xl flex items-center justify-center">
                <Image
                  src="/faztro.png"
                  alt="Faztro Logo"
                  className="object-contain p-1.5"
                  width={50}
                  height={50}
                />
              </div>
              <span className="text-3xl font-bold text-[#00AFA1] ml-3">
                Faztro
              </span>
            </div>
            <p className="text-xl max-w-md text-gray-400 leading-relaxed">
              Your trusted delivery partner in Puducherry. Making deliveries
              affordable and accessible to everyone.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h3 className="text-[#00AFA1] font-semibold text-2xl mb-8">
                Contact
              </h3>
              <ul className="space-y-6 text-xl">
                <li className="hover:text-[#00AFA1] transition-colors">
                  support@faztro.com
                </li>
                <li className="hover:text-[#00AFA1] transition-colors">
                  +91 XXXXXXXXXX
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#00AFA1] font-semibold text-2xl mb-8">
                Follow Us
              </h3>
              <ul className="space-y-6 text-xl">
                <li className="hover:text-[#00AFA1] transition-colors cursor-pointer">
                  Twitter
                </li>
                <li className="hover:text-[#00AFA1] transition-colors cursor-pointer">
                  Instagram
                </li>
                <li className="hover:text-[#00AFA1] transition-colors cursor-pointer">
                  Facebook
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
