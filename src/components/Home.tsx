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

// Separate countdown component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const launchDate = new Date("2025-02-14T00:00:00+05:30");
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference <= 0) {
        return {
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full px-4 md:px-0">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        <div className="text-center">
          <div className="bg-white w-full sm:w-24 md:w-20 h-20 rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-3xl md:text-4xl font-bold text-[#032A2C]">
              {timeLeft.days}
            </span>
          </div>
          <span className="text-sm font-medium text-gray-600 mt-2 block">
            Days
          </span>
        </div>
        <div className="text-center">
          <div className="bg-white w-full sm:w-24 md:w-20 h-20 rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-3xl md:text-4xl font-bold text-[#032A2C]">
              {timeLeft.hours}
            </span>
          </div>
          <span className="text-sm font-medium text-gray-600 mt-2 block">
            Hours
          </span>
        </div>
        <div className="text-center">
          <div className="bg-white w-full sm:w-24 md:w-20 h-20 rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-3xl md:text-4xl font-bold text-[#032A2C]">
              {timeLeft.minutes}
            </span>
          </div>
          <span className="text-sm font-medium text-gray-600 mt-2 block">
            Minutes
          </span>
        </div>
        <div className="text-center">
          <div className="bg-white w-full sm:w-24 md:w-20 h-20 rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-3xl md:text-4xl font-bold text-[#032A2C]">
              {timeLeft.seconds}
            </span>
          </div>
          <span className="text-sm font-medium text-gray-600 mt-2 block">
            Seconds
          </span>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-0 right-0 mx-4 md:mx-8 lg:mx-auto max-w-6xl bg-white/90 backdrop-blur-md z-50 rounded-2xl shadow-lg border border-white/20"
      >
        <div className="px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="relative h-10 w-10 bg-gradient-to-br from-[#032A2C] via-[#026D64] to-[#00AFA1] rounded-xl flex items-center justify-center transform hover:rotate-12 transition-all duration-300 hover:shadow-lg hover:shadow-teal-200/20">
                <Image
                  src="/faztro.png"
                  alt="Faztro Logo"
                  className="object-contain p-1"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-transparent bg-clip-text">
                Faztro
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button className="text-gray-800 hover:text-[#00AFA1] transition-colors font-medium">
                How it Works
              </button>
              <button className="text-gray-800 hover:text-[#00AFA1] transition-colors font-medium">
                Features
              </button>
              <button className="text-gray-800 hover:text-[#00AFA1] transition-colors font-medium">
                Contact
              </button>
              <button className="bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-white px-6 py-2.5 rounded-xl hover:shadow-lg transition-all hover:scale-105 hover:shadow-teal-100/50">
                Launch App
              </button>
            </div>
            <button className="md:hidden text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Hidden by default */}
      <div className="hidden fixed inset-0 bg-black bg-opacity-50 z-40">
        <div className="bg-white w-64 h-full">
          <div className="p-4">
            <button className="text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <button className="block w-full text-left py-2 text-gray-700 hover:text-[#00AFA1] transition-colors">
              How it Works
            </button>
            <button className="block w-full text-left py-2 text-gray-700 hover:text-[#00AFA1] transition-colors">
              Features
            </button>
            <button className="block w-full text-left py-2 text-gray-700 hover:text-[#00AFA1] transition-colors">
              Contact
            </button>
            <button className="w-full mt-4 bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-white px-6 py-2 rounded-xl">
              Launch App
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section with 3D Elements */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0FFF9] to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Your <span className="text-[#00AFA1]">Smart</span> Delivery
                Partner in{" "}
                <span className="bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-transparent bg-clip-text">
                  Puducherry
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Experience lightning-fast, affordable deliveries powered by
                smart technology and local expertise.
              </p>
              <div className="mt-10 flex flex-col items-center w-full">
                <CountdownTimer />
              </div>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow w-full md:w-auto"
              >
                Get Notified at Launch
              </motion.button> */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#032A2C]/10 to-[#00AFA1]/10 rounded-3xl transform rotate-6" />
                <div className="absolute inset-0  bg-gradient-to-br from-[#032A2C] via-[#026D64] to-[#00AFA1]  rounded-3xl shadow-xl -rotate-6">
                  <Image
                    src="/faztro.svg"
                    alt="Delivery Illustration"
                    layout="fill"
                    objectFit="contain"
                    className="p-8"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section with Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-transparent bg-clip-text">
              Why Choose Faztro?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Experience the future of local delivery services
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Most Affordable",
                description:
                  "Up to 40% cheaper than traditional delivery services",
                color: "from-emerald-500 to-teal-500",
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Average delivery time of just 45 minutes",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: "🎯",
                title: "Smart Routing",
                description:
                  "AI-powered route optimization for efficient deliveries",
                color: "from-purple-500 to-pink-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#032A2C] to-[#00AFA1] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:transform group-hover:-translate-y-2 transition-transform">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-[#032A2C] group-hover:text-[#00AFA1] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Timeline */}
      <section className="py-20 bg-[#F8FAFB]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-transparent bg-clip-text">
              How It Works
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Simple steps to get your items delivered
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-[#032A2C] to-[#00AFA1] -translate-x-1/2" />
            {TIMELINE_STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: step.align === "right" ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center mb-16 last:mb-0 ${
                  step.align === "right" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-5/12 ${
                    step.align === "right"
                      ? "text-right pr-8"
                      : "text-left pl-8"
                  }`}
                >
                  <h3 className="text-2xl font-semibold mb-2 text-[#032A2C]">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                <div className="w-2/12 flex justify-center relative">
                  <motion.div
                    animate={{
                      scale: index === activeStep ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      duration: 1,
                      repeat: index === activeStep ? Infinity : 0,
                    }}
                    className={`w-16 h-16 rounded-full bg-white border-4 ${
                      index === activeStep
                        ? "border-[#00AFA1]"
                        : "border-gray-200"
                    } flex items-center justify-center shadow-lg`}
                  >
                    {step.icon}
                  </motion.div>
                </div>
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#032A2C] to-[#00AFA1]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Deliveries?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the future of local delivery services in Puducherry
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-white text-[#032A2C] rounded-xl font-semibold shadow-lg"
            >
              Launch February 14
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#032A2C] text-gray-300 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="flex items-center mb-6">
                <div className="relative h-10 w-10 bg-gradient-to-br from-[#032A2C] via-[#026D64] to-[#00AFA1] rounded-xl flex items-center justify-center transform hover:rotate-12 transition-all duration-300 hover:shadow-lg hover:shadow-teal-200/20">
                  <Image
                    src="/faztro.png"
                    alt="Faztro Logo"
                    className="object-contain p-1"
                    width={40}
                    height={40}
                  />
                </div>
                <span className="text-2xl font-bold text-[#00AFA1] ml-3">
                  Faztro
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Revolutionizing local deliveries with smart technology and
                affordable rates.
              </p>
              <div className="flex space-x-4">
                {["Twitter", "Facebook", "Instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#00AFA1]/20 flex items-center justify-center hover:bg-[#00AFA1]/40 transition-colors"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[#00AFA1] font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {["About Us", "Services", "Pricing", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-[#00AFA1] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[#00AFA1] font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>support@faztro.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>📱</span>
                  <span>+91 83006 68710</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>📍</span>
                  <span>Puducherry, India</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 Faztro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
