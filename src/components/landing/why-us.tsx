"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DollarSign, Globe, Bot, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Cost-Effective Solutions",
    description:
      "Maximize your ROI with a streamlined approach to social media management. Save resources while delivering exceptional customer engagement.",
    learnMore: "#",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Effortless Global Reach",
    description:
      "Expand your business horizons with multilingual support that connects you to customers across the world, breaking down language barriers with ease.",
    learnMore: "#",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Reliable Round-the-Clock Service",
    description:
      "Ensure seamless communication with always-on support that keeps your audience engaged and satisfied at any time, day or night.",
    learnMore: "#",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-4 bg-gradient-to-br from-rose-700 via-stone-900 to-stone-950">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden"
          >
            <Image
              src="/marketing.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Smarter Social Media Management, at a Fraction of the Cost
              </h2>
              <p className="text-gray-200 text-lg mb-12">
                Save{" "}
                <span className="text-emerald-400 font-bold">$5000-$15000</span>{" "}
                per month with our AI-powered solution. Achieve better
                performance, faster responses, and global scalability—all at a
                fraction of the cost.
              </p>
            </motion.div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-rose-600/20">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 pl-11">{feature.description}</p>
                  <a
                    href={feature.learnMore}
                    className="inline-flex items-center pl-11 text-rose-400 hover:text-rose-300 transition-colors"
                  >
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pl-11"
            >
              <p className="text-gray-300 mb-6">
                Why settle for slow, costly human management? Our AI adapts to
                your business size, operates round the clock, and scales with
                your growth—all while delivering unmatched efficiency and
                savings.
              </p>
              <Button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2">
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
