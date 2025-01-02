import AutomationsBreadCrumb from "@/components/global/bread-crumbs/automations";
import React from "react";

type Props = {
  params: { id: string };
};

const Page = ({ params }: Props) => {
  return (
    <div>
      <AutomationsBreadCrumb id={params.id} />
    </div>
  );
};

export default Page;
