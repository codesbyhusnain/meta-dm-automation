import { PAGE_ICON } from "@/constants/pages";
import React from "react";

type Props = {
  page: string;
  slug?: string;
};

const MainBreadCrumb = ({ page, slug }: Props) => {
  return (
    <div className="flex flex-col items-start">
      <span className="radial--gradient inline-flex py-5 lg:py-10 pr-16 gap-x-2 items-center">
        {PAGE_ICON[page.toUpperCase()]}
        <h2 className="font-semibold text-3xl capitalize">{page}</h2>
      </span>
    </div>
  );
};

export default MainBreadCrumb;
