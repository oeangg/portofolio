import React from "react";
import { LinkButton } from "@/components/ui/link-button";

import { MdOutlineArrowOutward } from "react-icons/md";

export const LinkCTA = () => {
  return (
    <div className="flex flex-row items-center justify-start gap-3 pl-10">
      <LinkButton href="/contact" theme="bg">
        Work with me
        <MdOutlineArrowOutward size={20} className="group-hover:scale-125" />
      </LinkButton>
      <LinkButton href="/about" theme="border">
        My Resume
        <MdOutlineArrowOutward
          size={20}
          className="duration-300 group-hover:scale-125"
        />
      </LinkButton>
    </div>
  );
};
