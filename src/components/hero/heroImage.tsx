import React from "react";
import Image from "next/image";

export const HeroImage = () => {
  return (
    <div className="group relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-foreground grayscale duration-300 hover:shadow-sm hover:shadow-third hover:grayscale-0">
      <Image
        src="https://pub-d890061fd4f94f63b27e54a967b3b306.r2.dev/sbn.jpg"
        fill
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        alt="profil image"
        className="transform duration-300 group-hover:rotate-2 group-hover:scale-105"
      />
    </div>
  );
};
