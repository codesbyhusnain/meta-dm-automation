"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Rocket,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  Settings,
  ForwardIcon,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface FeatureProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

function Feature({ title, description, href, icon }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div className="w-12 h-12 flex items-center justify-center">
        <div className="p-3 rounded-full bg-gradient-to-br from-rose-500 to-red-800 text-white">
          {icon}
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-bold leading-tight">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-sm font-medium text-rose-600 hover:text-rose-800"
      >
        Learn More
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}

export function Features() {
  return (
    <section className="container py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-5xl font-bold tracking-tight mb-16 max-w-3xl"
      >
        Features That Empower Your Business
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-12">
        <Feature
          title="Instant Setup"
          description="No technical know-how? No problem! Get up and running in minutes with our seamless setup process designed for everyone."
          href="/features/setup"
          icon={<Rocket />}
        />
        <Feature
          title="Speak Every Language"
          description="Our AI speaks every language fluently, ensuring your customers feel heard, no matter where they are in the world."
          href="/features/multilingual"
          icon={<Globe />}
        />
        <Feature
          title="Engage Like Never Before"
          description="Automate comments, messages, and posts with precision, keeping your audience engaged 24/7 without lifting a finger."
          href="/features/engagement"
          icon={<MessageCircle />}
        />
        <Feature
          title="Powerful Insights"
          description="Analyze your performance and improve with deep insights and actionable analytics tailored to your goals."
          href="/features/analytics"
          icon={<TrendingUp />}
        />
        <Feature
          title="Customizable Workflows"
          description="Tailor every interaction to your brand’s voice and goals with fully customizable automation workflows."
          href="/features/customization"
          icon={<Settings />}
        />
        <Feature
          title="Rock-Solid Security"
          description="Your data is safe. Our enterprise-grade encryption ensures peace of mind for you and your customers."
          href="/features/security"
          icon={<ShieldCheck />}
        />
      </div>
    </section>
  );
}
