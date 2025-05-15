import React from "react";
import { HeroImage } from "./hero-image";

import { LinkSosmed } from "./link-sosmed";

export const IntroSection = () => {
  return (
    <section className="relative flex w-full flex-col justify-start">
      <div className="flex flex-col-reverse justify-between gap-10 lg:flex-row">
        <div className="w-full basis-3/4 space-y-5">
          <h1>
            Greetings!{" "}
            <span className="font-extrabold text-primary">
              I&apos;m Subhan 👋
            </span>{" "}
          </h1>
          <div className="space-y-4">
            <p className="text-xl font-light">
              a Frontend Developer with a strong focus on React. I&apos;m
              currently on a journey to deepen my knowledge and expertise to
              achieve my goal of becoming a Fullstack Developer. Let&apos;s
              connect on social media:
            </p>

            <LinkSosmed />
          </div>
        </div>
        <HeroImage />
      </div>
    </section>
  );
};
