import React from "react";
import { SubTitle } from "../subTitle";

import { TechList } from "./techList";

export const TechStackSection = () => {
  return (
    <div className="space-y-5">
      <SubTitle title="Skills" />
      <TechList />
    </div>
  );
};
