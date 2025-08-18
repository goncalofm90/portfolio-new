"use client";
import { motion } from "framer-motion";

export default function ScrollIndicator({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="text-gray-400"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="inline-block cursor-pointer"
        onClick={onClick}
      >
        <div className="p-3 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-500/20 border border-purple-500/30">
          <svg
            className="w-6 h-6 mx-auto text-purple-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}
