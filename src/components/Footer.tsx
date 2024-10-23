"use client";
import React from "react";
import {
  IconBrandDiscord,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="md:px-44 px-5 md:py-7 py-5  dark:bg-neutral-950 bg-white text-black dark:text-white ">
      <footer className="text-center flex gap-5 md:flex-row flex-col justify-between items-center px-10">
        <div className="order-2 md:order-1">
          <p>&copy; Copyright 2024 by Shaban Mughal - Thunder coder</p>
        </div>
        <div className="flex gap-5 items-center order-1 md:order-2">
          <Link
            href="https://x.com/ThanderMughalyt"
            className="border p-2 rounded-lg dark:bg-neutral-800 bg-neutral-100 border-neutral-400"
            >
            <IconBrandX />{" "}
          </Link>
          <Link
            href="https://discord.gg/xnUMZknt"
            className="border p-2 rounded-lg dark:bg-neutral-800 bg-neutral-100 border-neutral-400"
          >
            <IconBrandDiscord />{" "}
          </Link>
          <Link
            href="https://www.instagram.com/_artistic_manahil"
            className="border p-2 rounded-lg dark:bg-neutral-800 bg-neutral-100 border-neutral-400"
          >
            <IconBrandInstagram />{" "}
          </Link>
          <Link
            href="mailto:manahilartistic@gmail.com"
            className="border p-2 rounded-lg dark:bg-neutral-800 bg-neutral-100 border-neutral-400"
          >
            <IconMail />{" "}
          </Link>
          <Link
            href="https://wa.me/+923197617256"
            className="border p-2 rounded-lg dark:bg-neutral-800 bg-neutral-100 border-neutral-400"
          >
            <IconBrandWhatsapp />{" "}
          </Link>
        </div>
      </footer>
    </div>
  );
}
