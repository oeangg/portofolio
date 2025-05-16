import React from "react";
import Link from "next/link";
import { SubTitle } from "../subTitle";
import { LinkCTA } from "../hero/linkCta";

export const AboutSection = () => {
  return (
    <section className="space-y-4">
      <SubTitle title="About Me" />
      <div className="space-y-3">
        <p className="text-sm leading-5">
          Hello, I&apos;m Mohammad Subhan, just call me{" "}
          <span className="font-bold">Subhan</span>. After nearly seven years as
          a Borland Delphi programmer, I embarked on an exciting journey into
          web development in mid-2024. This path has involved self-study via
          Youtube{" "}
          <Link
            href="https://www.youtube.com/@sandhikagalihWPU"
            target="_blank"
            className="font-bold underline"
          >
            Youtube Web Programming Unpas
          </Link>{" "}
          and comprehensive training through{" "}
          <Link
            href="https://www.codepolitan.com/"
            target="_blank"
            className="font-bold underline"
          >
            Codepolitan
          </Link>{" "}
          (covering HTML, CSS, Tailwind CSS, and JavaScript), an immersive
          Fullstack JavaScript Bootcamp at{" "}
          <Link
            href="https://www.devscale.id/programs/fullstack-javascript-bootcamp"
            target="_blank"
            className="font-bold underline"
          >
            Devscale Indonesia
          </Link>{" "}
          (Aug-Oct 2024), and a React Developer course at{" "}
          <Link
            href="https://www.dicoding.com/"
            target="_blank"
            className="font-bold underline"
          >
            Dicoding Indonesia
          </Link>{" "}
          (Nov-Dec 2024). My current focus is on building expertise in the MERN
          stack with{" "}
          <Link
            href="https://wpucourse.id/"
            target="_blank"
            className="font-bold underline"
          >
            Wpu Online Course
          </Link>{" "}
          (from February 2025).
        </p>
        <p className="text-sm leading-5">
          Additionally, I enjoy video editing and produce content for YouTube,
          Instagram, and TikTok, specializing in travel and gathering videos.
          Feel free to check out my work on those platforms (
          <Link
            href="https://www.instagram.com/oeangg/"
            target="_blank"
            className="font-bold underline"
          >
            Instagram
          </Link>
          ,{" "}
          <Link
            href="https://www.tiktok.com/@oeanggggg"
            target="_blank"
            className="font-bold underline"
          >
            Tiktok
          </Link>{" "}
          &{" "}
          <Link
            href="https://www.youtube.com/@SubhanMohammad"
            target="_blank"
            className="font-bold underline"
          >
            Youtube
          </Link>
          )
        </p>
      </div>
      <LinkCTA />
    </section>
  );
};
