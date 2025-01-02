"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <div className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Pricing Plans
        </h2>
        <p className="text-xl text-muted-foreground">
          Choose a plan that fits your needs and start improving your Instagram
          DMs today!
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Basic Plan Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-lg p-8 bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg dark:from-gray-800 dark:to-gray-700"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Basic Plan
          </h3>
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-4xl font-bold text-foreground">$19</span>
            <span className="text-muted-foreground">/mo</span>
          </div>
          <ul className="space-y-4 mb-8">
            {basicFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          <Button className="w-full" size="lg">
            Get Started
          </Button>
        </motion.div>

        {/* Pro Plan Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-lg p-8 bg-gradient-to-br from-rose-600 via-rose-700 to-rose-800 shadow-lg text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-4xl font-bold">$49</span>
            <span className="text-white/80">/mo</span>
          </div>
          <ul className="space-y-4 mb-8">
            {proFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-white" />
                <span className="text-white/80">{feature}</span>
              </li>
            ))}
          </ul>
          <Button className="w-full" size="lg" variant="secondary">
            Get Started
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

const basicFeatures = [
  "Basic analytics",
  "Up to 1000 automated responses",
  "Message templates",
  "Single account support",
  "Basic integrations",
];

const proFeatures = [
  "Advanced analytics",
  "Unlimited automated responses",
  "Custom message templates",
  "Multiple account support",
  "Premium integrations",
  "Priority support",
];
