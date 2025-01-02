import { cn } from "@/lib/utils";
import React from "react";
import { Loader2Icon } from "lucide-react";

type Props = {
  state: boolean;
  className?: string;
  children: React.ReactNode;
  color?: string;
};

const Loader = ({ children, state, className, color }: Props) => {
  return state ? (
    <div className={cn(className)}>
      <Loader2Icon className="animate-spin text-white" size={40} />
    </div>
  ) : (
    children
  );
};

export default Loader;
