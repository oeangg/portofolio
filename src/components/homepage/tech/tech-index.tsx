import React from "react";
import { SubTitle } from "../../ui/sub-title";
import { GrTechnology } from "react-icons/gr";
import { TechList } from "./tech-list";

export const TechStackSection = () => {
  return (
    <div className="">
      <SubTitle
        title="Tech Stack"
        text="Here are my current favorite tech stack:"
      >
        <GrTechnology size={17} />
      </SubTitle>
      <TechList />
    </div>
  );
};
