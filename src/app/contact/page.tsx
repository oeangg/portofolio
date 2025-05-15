import { FormContact } from "@/src/components/contact/form.contact";
import { SERVICE_ID, PUBLIC_KEY, TEMPLATE_ID } from "@/src/utils/environment";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Subhan | Contact Me",
  description: "Let's Collaborate! Send Your Messagee",
};

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-2xl space-y-10">
      <div className="-space-y-1 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="text-xl font-light tracking-wide">
          Lets Collaborate with Me!
        </p>
      </div>
      <FormContact
        public_key={PUBLIC_KEY}
        service_id={SERVICE_ID}
        template_id={TEMPLATE_ID}
      />
    </div>
  );
}
