"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs"; // Import Clerk's useUser hook
import { ChevronRight } from "lucide-react";

export function Hero() {
  const { isSignedIn } = useUser(); // Get the user's authentication state

  return (
    <section className="relative bg-gradient-to-b from-stone-900 via-rose-900 to-bg">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="relative">
        <div className="container px-4 py-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                className="h-8 text-xs w-8 rounded-lg bg-white dark:bg-background flex items-center justify-center font-bold"
              >
                Dm
              </motion.div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl font-semibold text-primary-foreground dark:text-secondary-foreground"
              >
                DMotion
              </motion.span>
            </div>
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden space-x-6 text-sm text-rose-50 md:block"
            >
              <Link href="#features">Features</Link>
              <Link href="#pricing">Pricing</Link>
              <Link href="#about">About</Link>
            </motion.nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-x-2">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center"
                >
                  <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
                    {isSignedIn ? (
                      <span className="flex items-center gap-1">
                        Go to Dashboard <ChevronRight className="w-5 h-5" />
                      </span>
                    ) : (
                      "Login"
                    )}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-16 max-w-3xl text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Transform Your Instagram Engagement with Slide
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg text-rose-200"
            >
              Slide revolutionizes how you connect with your audience on
              Instagram. Automate responses and boost engagement effortlessly,
              turning interactions into valuable business opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex justify-center gap-4"
            >
              <Button
                size="lg"
                className="bg-rose-600 text-white hover:bg-rose-700"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-transparent"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative h-40 md:h-80 w-full mt-10"
          >
            <Image
              src="/Ig-creators.png"
              alt="Community member"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
