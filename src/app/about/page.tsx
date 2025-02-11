import { PageTitle } from "@/components/ui/page-title";
import imgProfil from "../../assets/images/sbn.jpg";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SubTitle } from "@/components/ui/sub-title";
import { LuFileUser } from "react-icons/lu";
import { LinkSosmed } from "@/components/homepage/hero/link-sosmed";

export default function Home() {
  return (
    <div>
      <PageTitle
        title="About Me"
        text="tell about the description of my life history"
      />

      <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row">
        <div className="flex w-full items-center justify-center grayscale">
          <div className="w-fit overflow-hidden rounded-xl shadow-sm shadow-foreground">
            <Image
              src={imgProfil}
              style={{ width: "auto", height: "auto", objectFit: "cover" }}
              alt="profil image"
            />
          </div>
        </div>
        <div className="space-y-5">
          <p>
            Hello my name is Mohammad Subhan, just call me{" "}
            <span className="font-bold text-secondary">Subhan!</span>.
            Previously I worked as a programmer using Borland Delphi for almost
            7 years.
          </p>
          <p>
            In mid-2024 I started to focus improve my skills in website
            development. I taught myself on{" "}
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
            I have created several projects using my favorite tech, namely Next
            JS, React, TailwindCSS, Prisma ORM.{" "}
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
      </div>

      <SubTitle title="Job Experience">
        <LuFileUser size={17} />
      </SubTitle>
      <div className="flex flex-col gap-10 border-t-2 border-primary pt-5">
        <div className="flex flex-col justify-between gap-5 border-b border-foreground pb-5 md:flex-row md:gap-10 lg:gap-14">
          <h2 className="w-full basis-1/3 text-secondary">
            May 2008 - Dec 2021
          </h2>
          <div className="flex w-full basis-2/3 flex-col space-y-4">
            <div className="text-secondary">
              <h2>IT Staff - Production - Programmer</h2>
              <h3>PT BILLNET MITRACOM, Jakarta</h3>
            </div>
            <ul className="list-inside list-disc space-y-3 font-light">
              <li>
                The first 5 years I worked as an IT staff, Entry data processing
                & LAN & Troubleshooting computer Internal
              </li>
              <li>
                Next Year until 2021, I Work as Programmer. Responsible
                designing application requirements the banking statement data
                printing process for internal and clients (reprint, reporting &
                tracking). I Use Borland Delphi 7 for Development.
              </li>
              <li>
                Last 2 years i am too responsible for production of billing
                statements from the printing process, inserting, courier
                handover to reporting to the client.
              </li>
              <li>
                Our clients : Bank Mandiri, Mega, Panin, AEON, BCA, Lintasarta,
                Indosat
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 border-b border-foreground pb-5 md:flex-row md:gap-10 lg:gap-14">
          <h2 className="w-full basis-1/3 text-secondary">
            July 2006- Nov 2007
          </h2>
          <div className="flex w-full basis-2/3 flex-col space-y-4">
            <div className="text-secondary">
              <h2>Human Resource</h2>
              <h3>PT MAKARIZO INDONESIA, Jakarta</h3>
            </div>
            <ul className="list-inside list-disc space-y-3 font-light">
              <li>
                Update database & maintenance of HEROES (Human Resource System)
                application
              </li>
              <li>
                Made & Update employee forms, SOP, company organizational
                structure
              </li>
              <li>
                Counted and maintained KPI (Key Performance Indicator) of every
                Departement and individual
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 md:flex-row md:gap-10 lg:gap-14">
          <h2 className="w-full basis-1/3 text-secondary">
            Sep 2005 - Jan 2006
          </h2>
          <div className="flex w-full basis-2/3 flex-col space-y-4">
            <div className="text-secondary">
              <h2>Computer Lab Assistant</h2>
              <h3>UNIVERSITAS BINA SARANA INFORMATIKA, Depok</h3>
            </div>
            <ul className="list-inside list-disc space-y-3 font-light">
              <li>As Instructor’s co-author at Lab</li>
              <li>
                Teaching staff of Microsoft Office, Access, Foxpro, Microsoft
                Visual Basic 6.0
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
