import React from "react";
import { SubTitle } from "../../sub-title";

import { TechList } from "./skill-list";

export const TechStackSection = () => {
  return (
    <div className="space-y-5">
      <SubTitle title="Skills" />
      <TechList />
    </div>
  );
};
