import React from "react";
import Image from "next/image";
import imgProfil from "../../assets/images/sbn.jpg";

export const AboutProfilPic = () => {
  return (
    <div className="w-fit overflow-hidden rounded-xl shadow-sm shadow-foreground">
      <Image
        src={imgProfil}
        style={{ width: "auto", height: "auto", objectFit: "cover" }}
        alt="profil image"
      />
    </div>
  );
};
