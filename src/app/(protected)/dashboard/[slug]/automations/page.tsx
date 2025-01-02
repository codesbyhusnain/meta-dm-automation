"use client";

import AutomationList from "@/components/global/automation-list";
import EmptyAutomations from "@/components/global/automations/empty-automations";
import { useQueryAutomations } from "@/hooks/user-queries";

type Props = {};

const Page = (props: Props) => {
  const { data } = useQueryAutomations();

  if (!data || data?.status !== 200 || data.data.length <= 0) {
    return (
      <div className="w-full flex justify-center">
        <EmptyAutomations />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-5 mt-4">
      <div className="lg:col-span-4">
        <AutomationList automations={data.data as any} />
      </div>
    </div>
  );
};

export default Page;
