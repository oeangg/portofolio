import { FormContact } from "@/src/components/contact/contactForm";
import { SERVICE_ID, PUBLIC_KEY, TEMPLATE_ID } from "@/src/utils/environment";

import React from "react";

export const ContactSection = () => {
  return (
    <section className="w-full space-y-10" id="contact">
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
    </section>
  );
};
