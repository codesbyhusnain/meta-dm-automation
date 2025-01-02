"use client";

import { motion } from "framer-motion";
import { BotIcon as Robot } from "lucide-react";
import CreateAutomation from "../../create-automation";

const EmptyAutomations = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[50vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="inline-block mb-6"
        >
          <Robot className="w-16 h-16 text-gray-400" />
        </motion.div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          No automations yet
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
          Create your first automation to streamline your workflow and save
          time.
        </p>
        <CreateAutomation />
      </motion.div>
    </div>
  );
};

export default EmptyAutomations;
