"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Posts", href: "/posts" },
  { label: "admin", href: "/admin" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Image
        src="https://bytegrad.com/course-assets/youtube/example-logo.png"
        alt="logo"
        width="35"
        height="35"
        className="w-[35px] h-[35px]"
      />

      <nav>
        <ul className="flex gap-5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                className={`text-zinc-400 ${
                  pathname === link.href
                    ? "font-bold text-blue-950 transition-all duration-700"
                    : ""
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
