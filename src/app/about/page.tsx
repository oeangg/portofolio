import { PageTitle } from "@/components/ui/page-title";
import React from "react";
import { SubTitle } from "@/components/ui/sub-title";

import { AboutDesc } from "@/components/about/about.desc";
import { AboutProfilPic } from "@/components/about/about.profilpic";
import { jobExperience } from "@/data/job.experience";
import { CardExperience } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <PageTitle title="About Me" text="tell about my Job" />

      <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row">
        <div className="flex w-full items-center justify-center grayscale">
          <AboutProfilPic />
        </div>
        <AboutDesc />
      </div>

      <SubTitle title="Experience" mb="sm" />
      <div className="flex flex-col gap-10 pt-5">
        {jobExperience.map((job, index) => (
          <CardExperience
            key={index}
            {...job}
            jobdesc={job.jobdesc.map((x) => x)}
          />
        ))}
      </div>
    </div>
  );
}
