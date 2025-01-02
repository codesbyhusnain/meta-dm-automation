"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import GradientButton from "../gradient-button";
import { usePaths } from "@/hooks/user.nav";

// Define the types for props and automation data
type Keyword = {
  id: string;
  word: string;
};

type Automation = {
  id: string;
  name: string;
  keywords: Keyword[];
  createdAt: Date;
  listener?: {
    listener: "SMARTAI" | "STANDARD";
  };
};

type Props = {
  automations: Automation[];
};

const AutomationList: React.FC<Props> = ({ automations }) => {
  const { pathname } = usePaths();

  return (
    <div className="flex flex-col gap-y-3">
      {automations.map((automation) => (
        <Link
          href={`${pathname}/${automation.id}`}
          key={automation.id}
          className="bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] radial--gradient--automations flex border-[#545454]"
        >
          <div className="flex flex-col flex-1 items-start">
            <h2 className="text-xl font-semibold">{automation.name}</h2>
            {automation.keywords.length > 0 ? (
              <div className="flex gap-x-2 flex-wrap mt-3">
                {automation.keywords.map((keyword, key) => (
                  <div
                    key={keyword.id}
                    className={cn(
                      "rounded-full px-4 py-1 capitalize",
                      (key + 1) % 1 === 0 &&
                        "bg-keyword-green/15 border-2 border-keyword-green",
                      (key + 1) % 2 === 0 &&
                        "bg-keyword-purple/15 border-2 border-keyword-purple",
                      (key + 1) % 3 === 0 &&
                        "bg-keyword-yellow/15 border-2 border-keyword-yellow",
                      (key + 1) % 4 === 0 &&
                        "bg-keyword-red/15 border-2 border-keyword-red"
                    )}
                  >
                    {keyword.word}
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-full border-2 mt-3 border-dashed border-white/60 px-3 py-1">
                <p className="text-sm text-[#bfc0c3]">No Keywords</p>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between">
            <p className="capitalize text-sm font-light text-[#9B9CA0]">
              {automation.createdAt.toLocaleString("default", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>

            {automation.listener?.listener === "SMARTAI" ? (
              <GradientButton
                type="BUTTON"
                className="w-full bg-background-80 text-white hover:bg-background-80"
              >
                Smart AI
              </GradientButton>
            ) : (
              <Button className="bg-background-80 hover:bg-background-80 text-white">
                Standard
              </Button>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AutomationList;
