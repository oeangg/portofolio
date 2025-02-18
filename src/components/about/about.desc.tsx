import React from "react";
import Link from "next/link";
import { LinkSosmed } from "@/components/homepage/hero/link-sosmed";

export const AboutDesc = () => {
  return (
    <div className="space-y-5">
      <p>
        Hello my name is Mohammad Subhan, just call me{" "}
        <span className="font-bold text-secondary">Subhan!</span>. Previously I
        worked as a programmer using Borland Delphi for almost 7 years.
      </p>
      <p>
        In mid-2024 I started to focus improve my skills in website development.
        I taught myself on{" "}
        <Link
          href="https://www.youtube.com/@sandhikagalihWPU"
          target="_blank"
          className="text-primary underline decoration-secondary decoration-dotted"
        >
          Youtube Web Programming Unpas
        </Link>
        ,then participated in several online bootcamps including :
      </p>
      <ul className="list-inside list-disc">
        <li>
          Html, css, tailwindcss and javascripts at{" "}
          <Link
            href="https://www.codepolitan.com/"
            target="_blank"
            className="text-primary underline decoration-secondary decoration-dotted"
          >
            Codepolitan
          </Link>{" "}
          (2023)
        </li>
        <li>
          8 Week Class the immersive fullstack javascripts in{" "}
          <Link
            href="https://www.devscale.id/"
            target="_blank"
            className="text-primary underline decoration-secondary decoration-dotted"
          >
            Devscale Indonesia
          </Link>{" "}
          (August - Oct 2024)
        </li>
        <li>
          Class React Developer in ID Camp Indosat{" "}
          <Link
            href="https://www.dicoding.com/"
            target="_blank"
            className="text-primary underline decoration-secondary decoration-dotted"
          >
            Dicoding Indonesia
          </Link>{" "}
          (Nov - Dec 2024)
        </li>
        <li>
          Now I Learn MERN stack in{" "}
          <Link
            href="https://wpucourse.id/"
            target="_blank"
            className="text-primary underline decoration-secondary decoration-dotted"
          >
            Wpu Course
          </Link>{" "}
          (1 Februari 2025 until present)
        </li>
      </ul>
      <p>
        I have created several projects using my favorite tech, namely Next JS,
        React, TailwindCSS, Prisma ORM.{" "}
        <Link
          href="/projects"
          className="text-primary underline decoration-secondary decoration-dotted"
        >
          See My Project
        </Link>
      </p>
      <p>Find Me on Social Media :</p>
      <LinkSosmed />
    </div>
  );
};
