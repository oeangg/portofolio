import { FormContact } from "@/components/contact/form.contact";
import { PageTitle } from "@/components/ui/page-title";

import React from "react";

export default function Home() {
  return (
    <div>
      <PageTitle title="Contact" text="connect with me to discuss" />
      <FormContact />
    </div>
  );
}
