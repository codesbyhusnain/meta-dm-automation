"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Step 1: Sign Up",
    description:
      "Create an account to get started with our powerful automation features tailored for your needs.",
    image: "/step-1.png",
  },
  {
    title: "Step 2: Connect Account",
    description:
      "Link your Instagram account securely to allow seamless integration with our automation tool.",
    image: "/step-2.png",
  },
  {
    title: "Step 3: Customize Settings",
    description:
      "Tailor your automated responses and chatbot settings to match your brand voice and audience.",
    image: "/step-3.png",
  },
];

export function Steps() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-24 bg-gradient-to-br from-rose-700 via-stone-900 to-stone-950">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <span className="text-sm font-medium text-rose-200">Effortless</span>
          <h2 className="text-4xl font-bold text-white">
            Streamline Your Social Media Management Today
          </h2>
          <p className="text-lg text-rose-300 max-w-2xl mx-auto">
            Setting up our powerful{" "}
            <span className="text-rose-400 font-bold">
              Automation Workflows
            </span>{" "}
            is a breeze. Follow these simple steps to enhance your engagement
            effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.button
              key={index}
              className={cn(
                "text-left space-y-2 p-4 rounded-lg transition-colors",
                activeStep === index
                  ? "bg-gradient-to-br from-rose-600 to-rose-800 text-white"
                  : "bg-white/10 text-rose-200 hover:bg-white/20"
              )}
              onClick={() => setActiveStep(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p
                className={cn(
                  "text-sm",
                  activeStep === index ? "text-white/80" : "text-rose-300"
                )}
              >
                {step.description}
              </p>
            </motion.button>
          ))}
        </div>

        <div className="relative aspect-[4/3] w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
