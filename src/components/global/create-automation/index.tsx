"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { PlusIcon, Sparkles } from "lucide-react";
import Loader from "../loader";
import { v4 } from "uuid";
import { useCreateAutomation } from "@/hooks/use-automations";

type Props = {};

const CreateAutomation = (props: Props) => {
  const { isPending, mutate } = useCreateAutomation();

  return (
    <Button
      className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 from-[#3352CC] to-[#1C2D70] text-white rounded-full font-medium"
      onClick={() =>
        mutate({
          name: "Untitled",
          id: v4(),
          createdAt: new Date(),
          keywords: [],
        })
      }
    >
      <Loader state={isPending}>
        <Sparkles size={20} />
        <p className="lg:inline hidden">Create An Automation</p>
      </Loader>
    </Button>
  );
};

export default CreateAutomation;
