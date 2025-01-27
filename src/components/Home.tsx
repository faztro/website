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
import PromoDialog from "./PromoDialog";

/*
Local hero will be assigned
A trusted local hero will be assigned to handle your delivery.

Focus on Your Day
Carry on with your daily tasks while we take care of your delivery.

Hassle-Free Delivery
Your items will be delivered promptly and efficiently.
k*/

const TIMELINE_STEPS = [
  {
    step: "1",
    title: "Post Your Request",
    description: "Share details of what needs to be delivered",
    align: "right",
    icon: "/icons/orders.svg",
  },
  {
    step: "2",
    title: "Local hero will be assigned",
    description:
      "A trusted local hero will be assigned to handle your delivery.",
    align: "left",
    icon: "/icons/location.svg",
  },
  {
    step: "3",
    title: "Focus on Your Day",
    description:
      "Carry on with your daily tasks while we take care of your delivery.",
    align: "right",
    icon: "/icons/clock.svg",
  },
  {
    step: "4",
    title: "Hassle-Free Delivery",
    description: "Your items will be delivered promptly and efficiently.",
    align: "left",
    icon: "/icons/delivery.svg",
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
      const launchDate = new Date("2025-01-26T00:00:00+05:30");
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

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        <div className="text-center p-2">
          <div className="bg-white w-full h-14 sm:h-16 md:h-20 rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#032A2C]">
              {timeLeft.days}
            </span>
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-600 mt-1 block">
            Days
          </span>
        </div>
        <div className="text-center p-2">
          <div className="bg-white w-full h-14 sm:h-16 md:h-20 rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#032A2C]">
              {timeLeft.hours}
            </span>
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-600 mt-1 block">
            Hours
          </span>
        </div>
        <div className="text-center p-2">
          <div className="bg-white w-full h-14 sm:h-16 md:h-20 rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#032A2C]">
              {timeLeft.minutes}
            </span>
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-600 mt-1 block">
            Minutes
          </span>
        </div>
        <div className="text-center p-2">
          <div className="bg-white w-full h-14 sm:h-16 md:h-20 rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#032A2C]">
              {timeLeft.seconds}
            </span>
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-600 mt-1 block">
            Seconds
          </span>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [activeStep] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPromoOpen, setIsPromoOpen] = useState(true);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] w-full relative">
      <PromoDialog isOpen={isPromoOpen} setIsOpen={setIsPromoOpen} />
      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-0 right-0 mx-4 w-[90%] md:w-[90%] md:mx-auto lg:mx-auto max-w-6xl bg-white/90 backdrop-blur-md z-50 rounded-2xl shadow-lg border border-white/20"
      >
        <div className="px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="relative h-8 w-8 md:h-10 md:w-10 rounded-xl flex items-center justify-center transform hover:rotate-12 transition-all duration-300 hover:shadow-lg hover:shadow-teal-200/20">
                <Image
                  src="/faztro_logo_circle.png"
                  alt="Faztro Logo"
                  className="object-contain p-1"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <span className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-transparent bg-clip-text whitespace-nowrap">
                Faztro
              </span>
            </div>
            <div className="hidden md:flex items-center md:space-x-4 lg:space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-800 hover:text-[#00AFA1] transition-colors font-medium whitespace-nowrap text-sm lg:text-base"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-800 hover:text-[#00AFA1] transition-colors font-medium whitespace-nowrap text-sm lg:text-base"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-800 hover:text-[#00AFA1] transition-colors font-medium whitespace-nowrap text-sm lg:text-base"
              >
                How it Works
              </button>
              <Link
                href={"mailto:support@faztro.com"}
                className="text-gray-800 hover:text-[#00AFA1] transition-colors font-medium whitespace-nowrap text-sm lg:text-base"
              >
                Contact
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-white rounded-xl text-center font-medium hover:shadow-lg transition-shadow whitespace-nowrap text-sm lg:text-base"
              >
                Order now
              </button>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-800 p-1"
            >
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

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "fixed" : "hidden"
        } inset-0 bg-black bg-opacity-50 z-50 w-full`}
      >
        <div className="bg-white w-64 h-full transform transition-transform duration-300 ease-in-out">
          <div className="p-4 flex justify-between items-center border-b">
            <div className="flex items-center space-x-2">
              <Image
                src="/faztro.svg"
                alt="Faztro Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-semibold text-[#032A2C]">Faztro</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
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
            <div className="space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-3 px-4 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-[#00AFA1] transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left py-3 px-4 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-[#00AFA1] transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left py-3 px-4 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-[#00AFA1] transition-colors"
              >
                How it Works
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-3 px-4 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-[#00AFA1] transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full py-3 px-4 bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-white rounded-xl text-center font-medium hover:shadow-lg transition-shadow"
              >
                Order now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-28 md:pt-44 pb-16 md:pb-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0FFF9] to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 text-center md:text-left space-y-4 md:space-y-6 w-full"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your <span className="text-[#00AFA1]">Everyday</span> Essentials
                by{" "}
                <span className="bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-transparent bg-clip-text">
                  Local Heroes
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                Say hello to Faztro – the fastest way to get your essentials
                delivered by trusted local heroes. Whether it's groceries,
                parcels, or custom requests, we've got you covered with a
                personal touch.
              </p>
              <div className="mt-6 md:mt-8">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full py-3 px-4 bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-white rounded-xl text-center font-medium hover:shadow-lg transition-shadow md:w-1/2 md:hidden"
                >
                  Order now
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full"
            >
              <div className="relative w-full h-[400px] lg:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#032A2C]/10 to-[#00AFA1]/10 rounded-3xl transform rotate-6" />
                <div className="absolute inset-0 bg-white rounded-3xl shadow-xl -rotate-6">
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
      <section id="about">
        <AboutSection />
      </section>

      {/* Features Section with Cards */}
      <section id="features" className="py-20 bg-white">
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
      <section id="services">
        <ServicesSection />
      </section>

      {/* How It Works - Timeline */}
      <section id="how-it-works" className="py-20 bg-[#F8FAFB]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-transparent bg-clip-text">
              How It Works
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Simple steps to get your items delivered
            </p>
          </div>
          <div className="relative overflow-hidden">
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
      <section id="partners">
        <DeliveryPartnersSection />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className="py-20 bg-gradient-to-r from-[#032A2C] to-[#00AFA1]"
      >
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">App Coming Soon</h2>
            <p className="text-xl mb-8 opacity-90">
              Stay tuned for the launch of our app, bringing you closer to your
              local heroes and the convenience you deserve.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-white text-[#032A2C] rounded-xl font-semibold shadow-lg"
              disabled
            >
              🚧 Under Development 🚧
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#032A2C] text-gray-300 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                {/* <div className="relative h-10 w-10 bg-gradient-to-br from-[#032A2C] via-[#026D64] to-[#00AFA1] rounded-xl flex items-center justify-center transform hover:rotate-12 transition-all duration-300 hover:shadow-lg hover:shadow-teal-200/20"> */}
                <div>
                  <Image
                    src="/faztro_logo_circle.png"
                    alt="Faztro Logo"
                    className="object-contain p-1"
                    width={40}
                    height={40}
                  />
                </div>
                <span className="text-xl md:text-2xl font-bold text-[#00AFA1] ml-3">
                  Faztro
                </span>
              </div>
              <p className="text-gray-400 mb-6 text-sm md:text-base">
                Connecting you with trusted local heroes for all your delivery
                needs. Supporting communities while delivering convenience to
                your doorstep.
              </p>
              <div className="flex space-x-4">
                {[
                  { name: "Facebook", link: "" },
                  {
                    name: "Instagram",
                    link: "https://www.instagram.com/faztroprime/",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-[#00AFA1]/20 flex items-center justify-center hover:bg-[#00AFA1]/40 transition-colors"
                  >
                    {social.name[0]}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[#00AFA1] font-semibold mb-4 text-lg">
                Quick Links
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-[#00AFA1] transition-colors text-sm md:text-base"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-[#00AFA1] transition-colors text-sm md:text-base"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("how-it-works")}
                    className="hover:text-[#00AFA1] transition-colors text-sm md:text-base"
                  >
                    How it Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-[#00AFA1] transition-colors text-sm md:text-base"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#00AFA1] font-semibold mb-4 text-lg">
                Connect With Us
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link
                    href="https://www.instagram.com/faztroprime/"
                    target="_blank"
                    className="hover:text-[#00AFA1] transition-colors flex items-center space-x-2 text-sm md:text-base"
                  >
                    <span>Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:support@faztro.com"
                    className="hover:text-[#00AFA1] transition-colors flex items-center space-x-2 text-sm md:text-base"
                  >
                    <span>Email Us</span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("partners")}
                    className="hover:text-[#00AFA1] transition-colors text-sm md:text-base"
                  >
                    Become a Partner
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("faq")}
                    className="hover:text-[#00AFA1] transition-colors text-sm md:text-base"
                  >
                    FAQs
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 md:mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Faztro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
