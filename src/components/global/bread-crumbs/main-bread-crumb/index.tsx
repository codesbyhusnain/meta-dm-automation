import { PAGE_ICON } from "@/constants/pages";
import React from "react";

type Props = {
  page: string;
  slug?: string;
};

const MainBreadCrumb = ({ page, slug }: Props) => {
  return (
    <div className="flex flex-col items-start">
      {page === "Home" && (
        <div className="flex justify-center w-full">
          <div className="radial--gradient w-4/12  flex flex-col items-center">
            <p className="text-text-secondary text-lg">Welcome back</p>
            <h2 className="capitalize text-4xl font-medium">{slug}!</h2>
          </div>
        </div>
      )}
      <span className="radial--gradient inline-flex pr-16 gap-x-2 items-center">
        {PAGE_ICON[page.toUpperCase()]}
        <h2 className="font-semibold text-3xl capitalize">{page}</h2>
      </span>
    </div>
  );
};

export default MainBreadCrumb;
