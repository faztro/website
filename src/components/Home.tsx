"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, scaleIn } from "../app/animations";
import { useState, useEffect } from "react";

const TIMELINE_STEPS = [
  {
    step: "1",
    title: "Place Order",
    description: "Tell us what you need",
    align: "right",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12 text-[#00AFA1]"
      >
        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
      </svg>
    ),
  },
  {
    step: "2",
    title: "Confirm Details",
    description: "We confirm pickup locations",
    align: "left",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12 text-[#00AFA1]"
      >
        <path
          fillRule="evenodd"
          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    step: "3",
    title: "Track Delivery",
    description: "Get real-time updates",
    align: "right",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12 text-[#00AFA1]"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    step: "4",
    title: "Receive Items",
    description: "Delivered to your doorstep",
    align: "left",
    icon: (
      <svg
        fill="#000000"
        height="50px"
        width="50px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 456.482 456.482"
        xmlSpace="preserve"
      >
        <g>
          <path
            d="M96.582,228.085c-43.026,0-78.03,35.004-78.03,78.029c0,43.023,35.004,78.025,78.03,78.025h0.002
		c43.024,0,78.027-35.002,78.027-78.025C174.611,263.089,139.607,228.085,96.582,228.085z M96.584,370.14h-0.002
		c-35.306,0-64.03-28.722-64.03-64.025c0-35.306,28.724-64.029,64.03-64.029c35.306,0,64.029,28.724,64.029,64.029
		C160.611,341.418,131.889,370.14,96.584,370.14z"
          />
          <path
            d="M96.58,281.802c-13.406,0-24.313,10.907-24.313,24.314c0,13.402,10.907,24.307,24.313,24.307
		c13.406,0,24.313-10.904,24.313-24.307C120.893,292.709,109.986,281.802,96.58,281.802z"
          />
          <path
            d="M378.453,228.085c-9.499,0-18.604,1.711-27.03,4.833l-23.453-50.632c3.429,2.024,7.422,3.191,11.684,3.191
		c3.866,0,7-3.134,7-7V146.35c0-3.866-3.134-7-7-7c-11.371,0-20.839,8.273-22.719,19.114l-16.609-35.857
		c-1.147-2.474-3.625-4.058-6.352-4.058h-20.88c-3.866,0-7,3.134-7,7s3.134,7,7,7h16.408l10.1,21.804
		c-0.296,0.329-0.566,0.688-0.803,1.082l-67.106,111.859h-8.423c-2.661,0-4.826-2.165-4.826-4.825v-49.828
		c0-20.756-16.886-37.643-37.641-37.643h-54.111V79.343c0-3.866-3.134-7-7-7H7c-3.866,0-7,3.134-7,7v128.843c0,3.866,3.134,7,7,7
		h37.324c-15.788,9.073-29.238,22.222-38.63,38.459c-1.936,3.347-0.792,7.628,2.554,9.564c3.345,1.935,7.628,0.793,9.564-2.555
		c16.224-28.046,46.407-45.469,78.77-45.469c50.139,0,90.93,40.791,90.93,90.931c0,3.866,3.134,7,7,7h72.557
		c2.464,0,4.746-1.295,6.009-3.41l55.475-92.854l10.238,22.104c-22.943,13.602-38.367,38.607-38.367,67.159
		c0,43.023,35.004,78.025,78.03,78.025h0.002c43.024,0,78.027-35.002,78.027-78.025
		C456.482,263.089,421.479,228.085,378.453,228.085z M14,174.999v-58.703h98.692v58.703H93.88H14z M112.692,86.343v15.953H14V86.343
		H112.692z M320.62,202.833l-57.523,96.283h-61.824c-3.615-54.607-49.185-97.931-104.69-97.931c-0.853,0-82.582,0-82.582,0v-12.187
		h166.804c13.036,0,23.641,10.607,23.641,23.643v49.828c0,10.38,8.445,18.825,18.826,18.825h12.387c2.459,0,4.737-1.29,6.003-3.399
		l64.988-108.33l14.861,32.084C321.18,202.006,320.879,202.399,320.62,202.833z M378.455,370.14h-0.002
		c-35.307,0-64.03-28.722-64.03-64.025c0-22.929,12.121-43.07,30.286-54.383l17.025,36.756c-4.672,4.434-7.595,10.693-7.595,17.628
		c0,13.402,10.906,24.307,24.313,24.307c13.405,0,24.312-10.904,24.312-24.307c0-13.406-10.906-24.314-24.312-24.314
		c-1.438,0-2.844,0.133-4.213,0.373l-16.904-36.494c6.616-2.319,13.72-3.596,21.118-3.596c35.306,0,64.029,28.724,64.029,64.029
		C442.482,341.418,413.76,370.14,378.455,370.14z"
          />
        </g>
      </svg>
    ),
  },
];

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 12000; // 12 seconds total
    const interval = 50; // Update every 50ms for smooth animation
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const currentProgress = Math.min(elapsed / duration, 1);

      setProgress(currentProgress);

      // Calculate active step based on progress
      const stepProgress = currentProgress * TIMELINE_STEPS.length;
      const currentStep = Math.min(
        Math.floor(stepProgress),
        TIMELINE_STEPS.length - 1
      );
      setActiveStep(currentStep);

      if (currentProgress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Reset animation
        startTime = timestamp;
        requestAnimationFrame(animate);
      }
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Calculate icon position based on progress
  const getIconPosition = () => {
    const stepHeight = 100 / TIMELINE_STEPS.length;
    const currentStepProgress = progress * TIMELINE_STEPS.length;
    const currentStep = Math.floor(currentStepProgress);
    const stepProgress = currentStepProgress - currentStep;

    // Calculate position between current and next step
    const basePosition = currentStep * stepHeight;
    const nextPosition = (currentStep + 1) * stepHeight;
    return `${basePosition + stepProgress * (nextPosition - basePosition)}%`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <div className="relative h-10 w-10 bg-gradient-to-br from-[#032A2C] to-[#00AFA1] rounded-lg flex items-center justify-center">
                <Image
                  src="/faztro.png"
                  alt="Faztro Logo"
                  className="object-contain p-1"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <span className="text-2xl font-bold text-gradient ml-3">
                Faztro
              </span>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
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
            className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Get anything delivered from anywhere within Puducherry at the most
            competitive rates.
          </motion.p>
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            className="inline-block gradient-primary px-8 py-4 rounded-xl text-white text-lg font-semibold"
          >
            Launching February 14
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Why Choose Faztro?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Most Affordable",
                description: "Lower prices than any other delivery service",
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
                  "Get items from multiple locations in one delivery",
                icon: "📦",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#032A2C]">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-20 text-gradient">
            How It Works
          </h2>
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-[#032A2C] to-[#00AFA1] -translate-x-[1px]" />

            {/* Floating Icon */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full z-20">
              <motion.div
                className="relative"
                style={{ top: getIconPosition() }}
                transition={{ duration: 0 }} // Disable default animation
              >
                <motion.div
                  className="p-4 bg-white rounded-xl shadow-lg"
                  animate={{
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {TIMELINE_STEPS[activeStep].icon}
                </motion.div>
              </motion.div>
            </div>

            {/* Timeline Items */}
            <div className="relative">
              {TIMELINE_STEPS.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center justify-center mb-32 last:mb-0 ${
                    step.align === "right" ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content Side */}
                  <div
                    className={`w-[40%] ${
                      step.align === "right"
                        ? "text-right pr-16"
                        : "text-left pl-16"
                    }`}
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: step.align === "right" ? -50 : 50,
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <h3 className="text-2xl font-semibold mb-3 text-[#032A2C]">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-lg">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10 w-[20%] flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className={`w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg ${
                        index === activeStep ? "ring-4 ring-[#00AFA1]/30" : ""
                      }`}
                    >
                      {step.step}
                    </motion.div>
                  </div>

                  {/* Empty Space Side */}
                  <div className="w-[40%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-primary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Be Among the First to Experience Faztro
          </h2>
          <p className="text-xl opacity-90">
            Coming soon to make deliveries affordable in Puducherry!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#032A2C] text-gray-300 py-12 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="relative h-8 w-8 bg-gradient-to-br from-[#032A2C] to-[#00AFA1] rounded-lg flex items-center justify-center">
                <Image
                  src="/faztro.png"
                  alt="Faztro Logo"
                  className="object-contain p-1"
                  width={32}
                  height={32}
                />
              </div>
              <span className="text-xl font-bold text-[#00AFA1] ml-2">
                Faztro
              </span>
            </div>
            <p className="text-gray-400">
              Your trusted delivery partner in Puducherry.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-[#00AFA1] font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>support@faztro.com</li>
                <li>+91 83006 68710</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#00AFA1] font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
