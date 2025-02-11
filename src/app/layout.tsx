import type { Metadata } from "next";
// import { Noto_Sans } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import { HeaderMenu } from "@/components/header/header-index";
import { Footer } from "@/components/footer/footer-index";

const robotoslab = Roboto_Slab({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Subhan Mohammad",
  description: "Let Work with me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoslab.className}>
        <section className="mx-auto flex w-full max-w-5xl flex-col justify-center px-10 pt-10 sm:px-7 md:px-4 lg:px-0 lg:pt-40">
          <HeaderMenu />
          {children}
          <Footer />
        </section>
      </body>
    </html>
  );
}
