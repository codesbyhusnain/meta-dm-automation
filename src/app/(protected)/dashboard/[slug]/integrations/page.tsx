import IntegrationCard from "@/components/global/integration-card";
import { INTEGRATION_CARDS } from "@/constants/integrations";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex mt-20 justify-center">
      <div className="flex flex-col w-full lg:w-8/12 gap-y-5">
        {INTEGRATION_CARDS.map((card, key) => (
          <IntegrationCard platform={card.strategy} key={key} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Page;
