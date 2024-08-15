import React from "react";
import Link from "next/link";
import Logo from "./Logo";

interface iNavItem {
  name: string;
  link: string;
}

const Navbar = () => {
  const navs: iNavItem[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/",
    },
    {
      name: "Services",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];
  return (
    <nav className="grid grid-cols-[3fr_1fr] place-content-center w-full h-12">
      <Logo />
      <div className="flex gap-8 items-center">
        {navs.map((navItem, i) => (
          <Link
            href={navItem.link}
            key={i}
            className="font-semibold text-white"
          >
            {navItem.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
