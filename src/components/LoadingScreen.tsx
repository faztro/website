"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      onAnimationComplete={() => (document.body.style.overflow = "unset")}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-16 w-16 bg-gradient-to-br from-[#032A2C] to-[#00AFA1] rounded-xl flex items-center justify-center"
      >
        <motion.div
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#032A2C] to-[#00AFA1] blur-xl opacity-50"
        />
      </motion.div>
    </motion.div>
  );
}
