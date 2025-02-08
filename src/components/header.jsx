"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Our Vision", href: "#vision" },
  { name: "Solutions", href: "#solutions" },
  { name: "Pricing", href: "#pricing" },
  { name: "Get in Touch", href: "#contact" },
];

const NavItem = ({ href, name }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-gray-400 hover:text-white transition duration-200 cursor-pointer"
    >
      {name}
    </a>
  );
};

export default function NavBar() {
  return (
    <nav className=" w-full    flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/images/logo/vector.svg" alt="SynexFlow logo" width="50" height="50" className="mr-2" />
        <span className="text-white text-2xl font-semibold">SynexFlow</span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        {navLinks.map((link, index) => (
          <NavItem key={index} href={link.href} name={link.name} />
        ))}
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-4">
        <Link href="#" className="text-white hover:text-blue-400">
          Sign in
        </Link>
        <Link
          href="#"
          className="text-white border border-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}
