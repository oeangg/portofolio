"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type PropsEnv = {
  service_id: string;
  public_key: string;
  template_id: string;
};

const contactSchema = z.object({
  name: z.string().min(4, "name must be minimum 4 character"),
  email: z
    .string()
    .min(8, "email must be minimum 8 character")
    .email("email not valid"),
  phone: z
    .string()
    .min(10, "phone must be minimum 10 character")
    .max(14, "phone must be maximal 14 character"),
  message: z
    .string()
    .min(10, "message must be minimun 10 character")
    .max(50, "message must be maximal 50 character"),
});

type ContactFormSchema = z.infer<typeof contactSchema>;

export const FormContact = (props: PropsEnv) => {
  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactSchema),
  });
  const { formState, handleSubmit, reset, register } = form;
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const { service_id, public_key, template_id } = props;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const sendMail = handleSubmit((field) => {
    setLoading(true);
    emailjs
      .send(
        service_id,
        template_id,
        {
          name: field.name,
          email: field.email,
          phone: field.phone,
          message: field.message,
        },
        {
          publicKey: public_key,
        },
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          setTimeout(() => setSent(false), 3000);
          reset();
        },
        (error) => {
          console.log("FAILED", error);
        },
      );
  });

  return (
    <form
      className="relative flex flex-col items-center justify-center gap-2 text-xs"
      onSubmit={sendMail}
    >
      <div className="flex w-full flex-col gap-1 md:w-2/3">
        <label htmlFor="" className="text-sm font-light text-foreground">
          FULL NAME
        </label>
        <input
          type="text"
          placeholder="Input your full name"
          autoComplete="off"
          {...register("name")}
        />
        {formState.errors.name && (
          <p className="text-red-500">{formState.errors.name.message}</p>
        )}
      </div>
      <div className="flex w-full flex-col gap-1 md:w-2/3">
        <label htmlFor="" className="text-sm font-light text-foreground">
          EMAIL
        </label>
        <input
          type="email"
          placeholder="Input your email address"
          autoComplete="off"
          {...register("email")}
        />
        {formState.errors.email && (
          <p className="text-red-500">{formState.errors.email.message}</p>
        )}
      </div>
      <div className="flex w-full flex-col gap-1 md:w-2/3">
        <label htmlFor="" className="text-sm font-light text-foreground">
          PHONE
        </label>
        <input
          type="tel"
          placeholder="Input your phone number"
          autoComplete="off"
          {...register("phone")}
        />
        {formState.errors.phone && (
          <p className="text-red-500">{formState.errors.phone.message}</p>
        )}
      </div>

      <div className="flex w-full flex-col gap-1 md:w-2/3">
        <label htmlFor="" className="text-sm font-light text-foreground">
          MESSAGE
        </label>

        <textarea
          placeholder="Write your message..."
          rows={3}
          autoComplete="off"
          {...register("message")}
        />
        {formState.errors.message && (
          <p className="text-red-500">{formState.errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-2xl bg-accent-foreground/80 px-4 py-2 text-base font-normal tracking-tight text-secondary shadow-sm shadow-secondary transition-all duration-300 hover:border-transparent hover:bg-accent-foreground hover:shadow-lg hover:shadow-muted-foreground disabled:opacity-60"
      >
        {loading ? (
          <span className="animate-pulse">Sending Message...</span>
        ) : (
          <span>Send Message</span>
        )}
      </button>
      {sent ? (
        <p className="absolute bottom-16 animate-pulse text-lg text-green-500">
          Thank You! Your email has been sent!
        </p>
      ) : null}
    </form>
  );
};
