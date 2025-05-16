import type { Metadata } from "next";
// import { Noto_Sans } from "next/font/google";
// import { Roboto_Slab } from "next/font/google";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "../components/ui/tooltip";
import { NavbarMenu } from "../components/navbar/headerIndex";
import { RetroGrid } from "../components/magicui/retro-grid";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
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
      <body className={fontSans.className}>
        <section className="relative h-screen w-full">
          <RetroGrid opacity={0.3} />
          <div className="mx-auto flex w-full max-w-3xl flex-col justify-center px-10 pb-20 pt-10 sm:px-7 md:px-4 lg:px-0 lg:pb-28 lg:pt-20">
            <TooltipProvider delayDuration={0}>
              {children}
              <NavbarMenu />
            </TooltipProvider>
          </div>
        </section>
      </body>
    </html>
  );
}
