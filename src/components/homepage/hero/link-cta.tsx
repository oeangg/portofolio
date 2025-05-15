import React from "react";

import { MdOutlineArrowOutward } from "react-icons/md";
import { LinkButton } from "../../link-button";

export const LinkCTA = () => {
  return (
    <div className="flex flex-row items-center justify-end gap-3">
      <LinkButton
        href="/contact"
        theme="bg"
        text="Work with Me"
        Icon={MdOutlineArrowOutward}
      />
      <LinkButton
        href="/api/download/resume"
        theme="border"
        text="My Resume"
        Icon={MdOutlineArrowOutward}
      />
    </div>
  );
};
