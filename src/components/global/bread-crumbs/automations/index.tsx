"use client";
import { ChevronRight, PencilIcon } from "lucide-react";
import React from "react";
import ActivateAutomationButton from "../../activate-automation-button";
import { useQueryAutomation } from "@/hooks/user-queries";
import { useMutationDataState } from "@/hooks/use-mutation-data";
import { Input } from "@/components/ui/input";
import { useEditAutomation } from "@/hooks/use-automations";

type Props = {
  id: string;
};

const AutomationsBreadCrumb = ({ id }: Props) => {
  const { data } = useQueryAutomation(id);
  const { edit, enableEdit, inputRef } = useEditAutomation(id);

  const { latestVariable } = useMutationDataState(["update-automation"]);

  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex items-center">
      <div className="flex items-center gap-x-3">
        <p className="text-zinc-300 truncate">Automations</p>
        <ChevronRight className="flex-shrink-0" color="#9B9CA0" />
        <span className="flex gap-x-3 items-center">
          {edit ? (
            <Input
              ref={inputRef}
              placeholder={
                latestVariable?.variables?.name
                  ? latestVariable?.variables?.name
                  : "Add a new name"
              }
              className="bg-transparent h-auto text-base border w-40 border-zinc-300 p-2"
            />
          ) : (
            <p className="text-zinc-300 truncate">
              {latestVariable?.variables
                ? latestVariable?.variables.name
                : data?.data?.name}
            </p>
          )}
          {edit ? (
            <></>
          ) : (
            <span
              className="cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4"
              onClick={enableEdit}
            >
              <PencilIcon size={14} />
            </span>
          )}
        </span>
      </div>

      <div className="flex items-center gap-x-5 ml-auto">
        <p className="hidden md:block text-text-secondary/60 text-sm truncate min-w-0">
          All states are automatically saved
        </p>
        <div className="flex gap-x-5 flex-shrink-0">
          <p className="text-text-secondary text-sm truncate min-w-0">
            Changes Saved
          </p>
        </div>
      </div>
      <ActivateAutomationButton id={id} />
    </div>
  );
};

export default AutomationsBreadCrumb;
