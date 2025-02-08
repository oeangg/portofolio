import { Home } from "lucide-react";
import React from "react";
import Image from "next/image";
import imgProfil from "../../assets/images/profil.svg";
import { LinkButton } from "../ui/link-button";

export const HeroPage = () => {
  return (
    <div className="h-svh w-full py-20">
      <div className="flex flex-row items-center justify-start gap-1 text-lg font-bold">
        <Home size={18} />
        <span>Intro</span>
      </div>
      <div className="flex flex-col items-center justify-between gap-20 lg:flex-row">
        <div className="w-full basis-2/3 space-y-8">
          <h1 className="text-6xl font-extrabold tracking-tight">
            Hello{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              I&apos;m Subhan
            </span>{" "}
          </h1>
          <p>
            My Name is Mohammad Subhan, i started my journey as a web programmer
            last year. I work with React as a frontend developer and continue to
            improve my skills to become a fullstack developer
          </p>
          <div className="flex flex-row items-center justify-start gap-5">
            <LinkButton href="/" text="Work with Me" theme="blue" />
            <LinkButton href="/" text="About Me" theme="transparant" />
          </div>
        </div>
        <div className="flex h-full w-full basis-1/3 items-center justify-center overflow-hidden rounded-2xl">
          <Image
            src={imgProfil}
            style={{ width: "auto", height: "100%", objectFit: "cover" }}
            alt="profil image"
          />
        </div>
      </div>
    </div>
  );
};
