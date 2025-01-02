"use client";

import { Button } from "@/components/ui/button";
import React, { useMemo } from "react";
import { v4 } from "uuid";
import { PlusIcon } from "lucide-react";

type Props = {};

const CreateAutomation = (props: Props) => {
  const mutationId = useMemo(() => v4(), []);

  return (
    <Button className="lg:px-10 py-6 bg-blue-600 hover:opacity-80 text-white rounded-full font-medium hover:bg-blue-700">
      <PlusIcon size={20} />
      <p className="lg:inline hidden">Create An Automation</p>
    </Button>
  );
};

export default CreateAutomation;
