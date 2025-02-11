import { FaFolderOpen } from "react-icons/fa";
import React from "react";

import { SubTitle } from "@/components/ui/sub-title";

export default function Home() {
  return (
    <div className="flex w-full justify-start">
      <SubTitle
        title="Project"
        text="Following are the projects I have worked on"
      >
        <FaFolderOpen size={17} />
      </SubTitle>
    </div>
  );
}
