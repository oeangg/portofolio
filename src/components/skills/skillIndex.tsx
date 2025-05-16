import React from "react";
import { SubTitle } from "../subTitle";

import { TechList } from "./techList";

export const TechStackSection = () => {
  return (
    <section className="space-y-5">
      <SubTitle title="Skills" />
      <TechList />
    </section>
  );
};
