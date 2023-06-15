import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-center space-x-2">
      <Image src="/logo.png" alt="Logo" width={30} height={30} />
      <span className="text-2xl font-bold text-icon">Client-App</span>
    </Link>
  );
};

export default Logo;
