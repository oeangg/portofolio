import { CiHome } from "react-icons/ci";

import React from "react";
import { HeroImage } from "./hero-image";

import { LinkCTA } from "./link-cta";
import { SubTitle } from "@/components/ui/sub-title";
import { LinkSosmed } from "./link-sosmed";

export const HeroSection = () => {
  return (
    <div className="flex h-svh w-full flex-col justify-start gap-5">
      <SubTitle title="Intro">
        <CiHome size={17} />
      </SubTitle>
      <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:gap-24">
        <div className="w-full basis-3/4 space-y-12">
          <h1>
            Hello{" "}
            <span className="font-black tracking-wide text-primary underline decoration-dotted">
              I&apos;m Subhan
            </span>{" "}
          </h1>
          <div className="space-y-4">
            <p>
              My Name is Mohammad Subhan, i started my journey as a web
              programmer mid 2024. I work with React as a frontend developer and
              continue to improve my skills to become a fullstack developer
            </p>

            <LinkSosmed />
          </div>

          <LinkCTA />
        </div>
        <HeroImage />
      </div>
    </div>
  );
};
