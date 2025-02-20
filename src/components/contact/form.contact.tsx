"use client";

import React, { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const FormContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showNotif, setShowNotif] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formRef = useRef<any>();

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_sg7oi4g",
        "template_w1pyifr",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        {
          publicKey: "yLmQnDUXd8t248Wkm",
        },
      )
      .then(
        () => {
          setLoading(false);
          setShowNotif(true);
          setTimeout(() => setShowNotif(false), 3000);
          formRef.current.reset();
        },
        (error) => {
          console.log("FAILED", error);
        },
      );
  };

  return (
    <form
      className="relative flex flex-col items-center justify-center gap-8"
      onSubmit={sendEmail}
      ref={formRef}
    >
      <div className="flex w-full flex-col gap-1 md:w-2/3">
        <label htmlFor="" className="text-sm font-light text-secondary">
          FULL NAME
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          required
          autoComplete="off"
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
      </div>
      <div className="flex w-full flex-col gap-1 md:w-2/3">
        <label htmlFor="" className="text-sm font-light text-secondary">
          EMAIL
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="Your email address"
          autoComplete="off"
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
      </div>
      <div className="flex w-full flex-col gap-1 md:w-2/3">
        <label htmlFor="" className="text-sm font-light text-secondary">
          PHONE
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="Your phone number"
          autoComplete="off"
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
          }}
        />
      </div>

      <div className="mb-4 flex w-full flex-col gap-1 md:w-2/3">
        <label htmlFor="" className="text-sm font-light text-secondary">
          MESSAGE
        </label>

        <textarea
          name="message"
          required
          placeholder="Write your message..."
          rows={3}
          autoComplete="off"
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
          }}
        />
      </div>

      <button
        type="submit"
        value="send"
        disabled={loading}
        className="rounded-xl bg-background px-7 py-3 text-lg font-medium uppercase text-secondary shadow-sm shadow-secondary transition-colors duration-300 hover:border-transparent hover:text-third hover:shadow-md hover:shadow-third disabled:opacity-60"
      >
        {loading ? (
          <span className="animate-pulse">Sending Message...</span>
        ) : (
          <span>Send Message</span>
        )}
      </button>
      {showNotif ? (
        <p className="absolute bottom-16 animate-pulse text-lg text-green-300">
          Thank You! Your email have been sent!
        </p>
      ) : null}
    </form>
  );
};
