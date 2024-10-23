"use client";
import { FloatingNav } from "./ui/floating-navbar";




export function Navbar() {
    

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Classic",
      link: "/classic-products",
    },
    {
      name: "Modern",
      link: "/modern-products",
    },
    {
      name: "Others",
      link: "/other-products",
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />

    </div>
  );
}

