import React from "react";
import { LinkIcon } from "@/components/ui/link-icon";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const LinkSosmed = () => {
  return (
    <div className="flex w-fit flex-row gap-6">
      <LinkIcon href="https://www.linkedin.com/in/subhan-mohammad-50738aa1/">
        <FaLinkedin size={21} />
      </LinkIcon>
      <LinkIcon href="https://github.com/oeangg">
        <FaGithub size={21} />
      </LinkIcon>
      <LinkIcon href="https://www.instagram.com/oeangg/">
        <FaInstagram size={21} />
      </LinkIcon>
      <LinkIcon href="https://x.com/oeangg">
        <FaXTwitter size={21} />
      </LinkIcon>
    </div>
  );
};
