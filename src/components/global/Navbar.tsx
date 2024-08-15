import React, { FC } from "react";
import Link from "next/link";
import Logo from "./Logo";

interface iNavItem {
  name: string;
  link: string;
}

const Navbar: FC<{ swap: boolean }> = ({ swap }) => {
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
    <nav
      className={`px-20  grid grid-cols-[3fr_1fr] ease-out duration-200 transition-colors md:grid-cols-2 place-content-center md:place-content-start md:place-items-start w-full h-20`}
    >
      <Logo />
      <div className="flex gap-8 items-center md:hidden">
        {navs.map((navItem, i) => (
          <Link
            href={navItem.link}
            key={i}
            className={`font-semibold ${swap ? "text-dark" : "text-white"}`}
          >
            {navItem.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
