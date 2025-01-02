"use client";

import { motion } from "framer-motion";
import {
  MessageSquareText,
  Fingerprint,
  Sparkles,
  Settings,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const voiceExamples = [
  {
    brand: "Professional",
    message:
      "We understand your requirements and will deliver exceptional results.",
    tone: "Formal and trustworthy",
  },
  {
    brand: "Friendly",
    message: "Hey there! We'd love to help you achieve amazing results! 😊",
    tone: "Casual and approachable",
  },
  {
    brand: "Luxury",
    message: "Experience unparalleled excellence in every interaction.",
    tone: "Sophisticated and premium",
  },
];

const features = [
  {
    icon: <Fingerprint className="w-6 h-6" />,
    title: "Unique Voice Recognition",
    description:
      "Our AI analyzes and perfectly mirrors your brand's unique communication style.",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Customizable Tone",
    description:
      "Fine-tune the AI's communication style to match your brand personality.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Consistent Delivery",
    description:
      "Maintain a consistent brand voice across all customer interactions, 24/7.",
  },
];

export default function BrandVoiceShowcase() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-rose-700 text-transparent bg-clip-text">
            Your Brand Voice, Amplified
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We don't just manage your social media - we become your brand's
            digital voice, maintaining your unique tone and personality in every
            interaction.
          </p>
        </motion.div>

        {/* Voice Examples */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {voiceExamples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-gray-800/50 backdrop-blur border-gray-700 hover:bg-gray-800/70 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-rose-500 to-rose-700 p-3 rounded-full">
                    <MessageSquareText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {example.brand}
                    </h3>
                    <p className="text-gray-400 mb-2">{example.message}</p>
                    <span className="text-sm text-gray-500">
                      {example.tone}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-3 rounded-full bg-gradient-to-r from-rose-500/20 to-violet-500/20 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-rose-500 to-violet-500">
            <button className="px-8 py-3 rounded-full bg-gray-900 transition-all hover:shadow-[0_0_15px_rgba(236,72,153,0.8),0_0_30px_rgba(139,92,246,0.8)]">
              Experience Your Brand Voice AI
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
