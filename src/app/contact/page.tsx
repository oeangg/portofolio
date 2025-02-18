import { PageTitle } from "@/components/ui/page-title";
import React from "react";

export default function Home() {
  return (
    <div>
      <PageTitle title="Contact" text="connect with me to discuss" />
      <form
        action=""
        className="flex flex-col items-center justify-center gap-8"
      >
        <div className="flex w-full flex-col gap-1 md:w-2/3">
          <label htmlFor="" className="text-sm font-light text-secondary">
            FULL NAME
          </label>
          <input type="text" name="name" placeholder="Your full name" />
        </div>
        <div className="flex w-full flex-col gap-1 md:w-2/3">
          <label htmlFor="" className="text-sm font-light text-secondary">
            EMAIL
          </label>
          <input type="email" name="name" placeholder="Your email address" />
        </div>
        <div className="flex w-full flex-col gap-1 md:w-2/3">
          <label htmlFor="" className="text-sm font-light text-secondary">
            PHONE
          </label>
          <input type="tel" name="name" placeholder="Your phone number" />
        </div>

        <div className="flex w-full flex-col gap-1 md:w-2/3">
          <label htmlFor="" className="text-sm font-light text-secondary">
            MESSAGE
          </label>
          <textarea name="name" placeholder="Write your message..." rows={3} />
        </div>
        <button className="rounded-xl bg-background px-7 py-3 text-lg font-medium uppercase text-secondary shadow-sm shadow-secondary transition-colors duration-300 hover:border-transparent hover:text-third hover:shadow-md hover:shadow-third">
          Send Message
        </button>
      </form>
    </div>
  );
}
