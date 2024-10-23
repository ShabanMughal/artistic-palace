"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { IconSignature } from "@tabler/icons-react";

export function Section() {
  return (
    <div
      id="about"
      className="md:h-screen h-full px-5 pb-10 md:pb-0 dark:bg-neutral-950 bg-white"
    >
      <div className="flex flex-col md:flex-row pt-20 pb-5 md:pt-24 md:pb-[6%] items-center justify-center text-2xl md:text-4xl font-bold">
        <p className="mr-3">Our Vision </p>{" "}
        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
          <span className=""> Art for Every Space</span>
        </div>
      </div>

      <BentoGrid className="max-w-6xl ">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
    <img
      src="https://i.pinimg.com/564x/2e/bf/78/2ebf78d14985dd4dbd8a94de1783c52a.jpg"
      className="object-cover w-full"
    />
  </div>
);
const Skeleton2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
    <img
      src="https://i.pinimg.com/564x/03/0b/72/030b72e9f0b4576370a6acdb9e84e492.jpg"
      className="object-cover w-full"
    />
  </div>
);
const Skeleton3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
    <img
      src="https://i.pinimg.com/736x/f2/b6/a8/f2b6a8038a59f45544cda94dc48c991d.jpg"
      className="object-cover w-full"
    />
  </div>
);
const items = [
  {
    title: "Classic Calligraphy",
    description:
      "Classic calligraphy refers to traditional styles like Blackletter, Roman Capitals, and Italic. It is often seen in ancient manuscripts, religious texts, and historical documents. This style is characterized by precise strokes, balanced forms, and a timeless elegance that reflects the heritage of Western script traditions.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Modren Calligraphy",
    description:
      "Modern calligraphy blends traditional techniques with contemporary design, often used for invitations, logos, and art. It is more freeform and expressive, with less strict rules, allowing for personal style and creativity. Brush lettering and pointed pen calligraphy are popular forms of modern calligraphy.",
    header: <Skeleton2 />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Arabic Calligraphy",
    description:
      "Arabic calligraphy is an ancient and highly spiritual art form, central to Islamic culture. It is known for its intricate designs, flowing curves, and elegant scripts like Thuluth, Naskh, and Diwani. Often seen in religious texts and architectural decorations, Arabic calligraphy is both functional and decorative, symbolizing beauty and meaning.",
    header: <Skeleton3 />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
