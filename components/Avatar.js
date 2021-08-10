import React from "react";
import Image from "next/image";

function Avatar({ url }) {
  return (
    <div className="relative w-8 h-8 rounded-full transition hover:scale-110 duration-150 ease-in-out">
      <Image
        src={url}
        alt="Profile pic"
        layout="fill"
        objectFit="cover"
        className="rounded-full cursor-pointer"
      />
    </div>
  );
}

export default Avatar;
