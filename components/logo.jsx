import Image from "next/image";
import React from "react";
import logo from "@/assets/Skolaris.png";
import { cn } from "@/lib/utils";

const Logo = ({ className = "" }) => {
  return (
    <div>
      <Image
        className={cn("max-w-[200px]", className)}
        src={logo}
        height={80}
        alt="logo"
      />
    </div>
  );
};

export default Logo;
