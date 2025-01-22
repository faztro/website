"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import FAQSection from "./FAQSection";
import DeliveryPartnersSection from "./DeliveryPartnersSection";
import ContactSection from "./ContactSection";

const TIMELINE_STEPS = [
  {
    step: "1",
    title: "Post Your Request",
    description: "Share details of what needs to be delivered",
    align: "right",
    icon: "/icons/order.png",
  },
  {
    step: "2",
    title: "Meet Your Local Hero",
    description: "Get matched with a trusted delivery partner nearby",
    align: "left",
    icon: "/icons/location.png",
  },
  {
    step: "3",
    title: "Track in Real Time",
    description: "Watch your delivery's journey every step of the way",
    align: "right",
    icon: "/icons/clock.png",
  },
  {
    step: "4",
    title: "Pay & Rate",
    description: "Enjoy secure payment options and share your feedback",
    align: "left",
    icon: "/icons/delivery.png",
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
  const [activeStep] = useState(0);

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
              <Link
                href={"https://www.instagram.com/faztroprime/"}
                target="_blank"
                className="bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-white px-6 py-2.5 rounded-xl hover:shadow-lg transition-all hover:scale-105 hover:shadow-teal-100/50"
              >
                Order now
              </Link>
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
                Your <span className="text-[#00AFA1]">Everyday</span> Essentials
                by{" "}
                <span className="bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-transparent bg-clip-text">
                  Local Heroes
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Say hello to Faztro – the fastest way to get your essentials
                delivered by trusted local heroes. Whether it's groceries,
                parcels, or custom requests, we've got you covered with a
                personal touch.
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
              <div className="relative w-full h-[500px] mt-20">
                {/* <div className="absolute inset-0 bg-gradient-to-br from-[#032A2C]/10 to-[#00AFA1]/10 rounded-3xl transform rotate-6" />
                <div className="absolute inset-0  bg-gradient-to-br from-[#032A2C] via-[#026D64] to-[#00AFA1]  rounded-3xl shadow-xl -rotate-6"> */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#032A2C]/10 to-[#00AFA1]/10 rounded-3xl transform rotate-6" />
                <div className="absolute inset-0  bg-white  rounded-3xl shadow-xl -rotate-6">
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

      {/* About Section */}
      <AboutSection />

      {/* Features Section with Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-transparent bg-clip-text">
              Why Choose Faztro?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Empowering Communities, One Delivery at a Time
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💪",
                title: "Community-Driven",
                description:
                  "Support local heroes while getting your essentials delivered",
                color: "from-emerald-500 to-teal-500",
              },
              {
                icon: "⚡",
                title: "Speed & Efficiency",
                description: "Real-time tracking and lightning-fast deliveries",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: "🤝",
                title: "Trust & Reliability",
                description: "Vetted local partners and secure payment options",
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

      {/* Services Section */}
      <ServicesSection />

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
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={64}
                      height={64}
                    />
                  </motion.div>
                </div>
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Partners Section */}
      <DeliveryPartnersSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#032A2C] to-[#00AFA1]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience Local Hero Deliveries?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the community of trusted local heroes and happy customers
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
                Connecting you with trusted local heroes for all your delivery
                needs. Supporting communities while delivering convenience to
                your doorstep.
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
                  <Link href="mailto:support@faztro.com">
                    support@faztro.com
                  </Link>
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
