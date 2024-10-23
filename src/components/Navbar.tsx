"use client";
import { FloatingNav } from "./ui/floating-navbar";
import {
  IconHome,
  IconShoppingBag,
  IconShoppingBagExclamation,
  IconShoppingBagHeart,
} from "@tabler/icons-react";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Classic",
      link: "/classic-products",
      icon: (
        <IconShoppingBag className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Modern",
      link: "/modern-products",
      icon: (
        <IconShoppingBagExclamation className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Others",
      link: "/other-products",
      icon: (
        <IconShoppingBagHeart className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
