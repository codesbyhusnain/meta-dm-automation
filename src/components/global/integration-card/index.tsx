"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  platform: "INSTAGRAM" | "FACEBOOK" | "WHATSAPP";
};

const platformStyles = {
  INSTAGRAM: {
    gradient: "from-purple-500 via-pink-500 to-orange-500",
    darkGradient: "dark:from-purple-900 dark:via-pink-900 dark:to-orange-900",
    iconBg: "bg-gradient-to-br from-purple-400 to-pink-400",
    darkIconBg: "dark:from-purple-800 dark:to-pink-800",
  },
  FACEBOOK: {
    gradient: "from-blue-600 to-blue-800",
    darkGradient: "dark:from-blue-900 dark:to-blue-700",
    iconBg: "bg-blue-500",
    darkIconBg: "dark:bg-blue-700",
  },
  WHATSAPP: {
    gradient: "from-green-400 to-green-600",
    darkGradient: "dark:from-green-800 dark:to-green-600",
    iconBg: "bg-green-500",
    darkIconBg: "dark:bg-green-700",
  },
};

const IntegrationCard = ({ description, icon, platform, title }: Props) => {
  const style = platformStyles[platform];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-gradient-to-br ${style.gradient} ${style.darkGradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-row sm:flex-row items-center gap-2 sm:gap-6 p-2 sm:p-6`}
    >
      {/* Icon Section */}
      <div
        className={`flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 ${style.iconBg} ${style.darkIconBg} rounded-full p-2 sm:p-3`}
      >
        {React.cloneElement(icon as React.ReactElement, {
          className: "w-6 h-6 sm:w-10 sm:h-10 text-white",
        })}
      </div>

      {/* Text Section */}
      <div className="flex flex-col flex-1 text-left">
        <h3 className="text-lg sm:text-2xl font-semibold text-white sm:mb-2">
          {title}
        </h3>
        <p className="hidden sm:block text-white text-base leading-relaxed opacity-90">
          {description}
        </p>
      </div>

      {/* Button Section */}
      <div className="flex justify-end">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full px-3 py-1 sm:px-6 sm:py-2 text-sm sm:text-lg font-medium transition duration-300 shadow-md hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            Connect
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntegrationCard;
