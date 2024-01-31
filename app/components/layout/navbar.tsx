import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center h-16 px-4 md:px-8 md:h-20">
      <Link href="/" className="font-eb-garamond text-xl">
        Kaspers
      </Link>
    </div>
  );
};

export default Navbar;
