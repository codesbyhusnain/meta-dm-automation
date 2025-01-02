import InfoBar from "@/components/global/infobar";
import Sidebar from "@/components/global/sidebar";
import React from "react";
import { query } from "@/lib/react-query";
import {
  PrefetchUserAutnomations,
  PrefetchUserProfile,
} from "@/react-query/prefetch";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout = async ({ children, params }: Props) => {
  await PrefetchUserProfile(query);
  await PrefetchUserAutnomations(query);

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="p-3">
        <Sidebar slug={params.slug} />
        <div
          className="
      lg:ml-[250px]
      lg:pl-10
      lg:py-5
      flex
      flex-col
      overflow-auto
      "
        >
          <InfoBar slug={params.slug} />
          {children}
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default Layout;
