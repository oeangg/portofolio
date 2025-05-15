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
        href="https://pub-d890061fd4f94f63b27e54a967b3b306.r2.dev/CV_subhan.pdf"
        theme="border"
        text="My Resume"
        download="CV_subhan.pdf"
        Icon={MdOutlineArrowOutward}
      />
    </div>
  );
};
