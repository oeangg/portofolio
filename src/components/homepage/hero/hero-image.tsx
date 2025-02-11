import React from "react";
import Image from "next/image";
import imgProfil from "../../../assets/images/sbn.jpg";

export const HeroImage = () => {
  return (
    <div className="group relative flex h-56 w-56 items-center justify-center overflow-hidden rounded-2xl border border-foreground grayscale duration-300 hover:shadow-md hover:shadow-third hover:grayscale-0 lg:h-full lg:w-full lg:basis-1/3">
      <Image
        src={imgProfil}
        fill
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        alt="profil image"
        className="transform duration-300 group-hover:rotate-2 group-hover:scale-105"
      />
    </div>
  );
};
