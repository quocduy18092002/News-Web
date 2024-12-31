import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="relative h-36 ">
        <Image src="/logo.jpg" alt="logo" fill className="object-contain " />
      </div>
    </div>
  );
};

export default Header;
