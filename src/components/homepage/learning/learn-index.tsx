import React from "react";
import { GoRepoForked } from "react-icons/go";
import { SubTitle } from "@/components/ui/sub-title";

export const LearnSection = () => {
  return (
    <div className="mb-40">
      <SubTitle
        title="Currently Learning"
        text="Currently improving my tech skills"
      >
        <GoRepoForked size={17} />
      </SubTitle>
    </div>
  );
};
