"use client";

import AutomationList from "@/components/global/automation-list";
import EmptyAutomations from "@/components/global/automations/empty-automations";
import CreatePromptCard from "@/components/global/create-prompt-card";
import { useMutationDataState } from "@/hooks/use-mutation-data";
import { useQueryAutomations } from "@/hooks/user-queries";
import { useEffect, useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const { data: serverData } = useQueryAutomations();
  const { latestVariable } = useMutationDataState(["create-automation"]);

  // State to manage the optimistically updated automations
  const [automations, setAutomations] = useState<any>([]);

  useEffect(() => {
    // Combine server data and optimistic updates
    const updatedAutomations = latestVariable?.variables
      ? [latestVariable.variables, ...(serverData?.data || [])]
      : serverData?.data || [];

    setAutomations(updatedAutomations);
  }, [serverData, latestVariable]);

  // Handle empty state
  if (automations.length === 0) {
    return <EmptyAutomations />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-5 mt-4">
      <div className="lg:col-span-4">
        <AutomationList automations={automations} />
      </div>
      <CreatePromptCard />
    </div>
  );
};

export default Page;
