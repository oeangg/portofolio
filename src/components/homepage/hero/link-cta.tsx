import React from "react";
import { LinkButton } from "@/components/ui/link-button";
import { MdOutlineArrowOutward } from "react-icons/md";

export const LinkCTA = () => {
  return (
    <div className="flex flex-row items-center justify-start gap-3 pl-10">
      <LinkButton
        href="/contact"
        theme="bg"
        text="Work with Me"
        Icon={MdOutlineArrowOutward}
      />
      <LinkButton
        href="/about"
        theme="border"
        text="My Resume"
        Icon={MdOutlineArrowOutward}
      />
    </div>
  );
};
