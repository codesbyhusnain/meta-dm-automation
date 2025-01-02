"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, PenTool, Target, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";

const smallCards = [
  {
    icon: <PenTool className="w-6 h-6 text-blue-500" />,
    title: "Clarity",
    description:
      "A precise prompt ensures your AI delivers accurate and relevant content.",
  },
  {
    icon: <Target className="w-6 h-6 text-purple-500" />,
    title: "Customization",
    description:
      "Shape your AI’s responses to perfectly match your brand voice and style.",
  },
  {
    icon: <Smile className="w-6 h-6 text-green-500" />,
    title: "Engagement",
    description:
      "Engage your audience with content that resonates, thanks to tailored prompts.",
  },
];

export default function InformativePromptCard() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl shadow-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Unlock Your Brand's Potential
        </h2>
        <p className="text-gray-400 mb-8">
          A well-crafted prompt is the secret to creating engaging, meaningful
          AI-generated content. With the right prompts, your brand's voice
          becomes stronger and your audience feels more connected.
        </p>
      </motion.div>

      {/* Small Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 gap-y-2 mb-4"
      >
        {smallCards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-full bg-gray-700">{card.icon}</div>
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
            </div>
            <p className="text-gray-400 mt-2">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center"
      >
        <Button
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          onClick={() => {
            // Navigate to the prompt creation page
            window.location.href = "/create-prompt";
          }}
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Create Your Perfect Prompt
        </Button>
      </motion.div>
    </div>
  );
}
