/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./ui/animated-modal";
import { motion } from "framer-motion";
import { FaPenNib } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { PiUniteSquare } from "react-icons/pi";
import { FaPenClip } from "react-icons/fa6";
import { GrArticle } from "react-icons/gr";

export function Button() {
  const images = [
    "https://i.pinimg.com/736x/d1/28/cf/d128cfefd74a10e0a6def85bdc463fb5.jpg",
    "https://i.pinimg.com/736x/ba/6b/c1/ba6bc19bf472c387b5c6b1d09258c3c1.jpg",
    "https://i.pinimg.com/736x/b9/df/e0/b9dfe07ee49ab1eac27c0f31e769008c.jpg",
    "https://i.pinimg.com/736x/69/84/e4/6984e443309ece0230e7d2a9795a9514.jpg",
    "https://i.pinimg.com/enabled_lo/564x/79/2b/f6/792bf69018945fd905924be642fcbd9c.jpg",
  ];
  return (
    <div className="py-10 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Special Offer!
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            🔥
          </div>
        </ModalTrigger>
        <ModalBody className="mx-5 md:mx-1 rounded-lg">
          <ModalContent className="">
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Elevate your space with the{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Beauty
              </span>{" "}
              of art! 🎨
            </h4>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 12 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <img
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-center max-w-sm mx-auto">
              <div className="flex  items-center justify-center">
                <FaPenNib className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  5 Exclutive painting collections
                </span>
              </div>
              <div className="flex items-center justify-center">
                <MdArticle className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Curated art styles
                </span>
              </div>
              <div className="flex items-center justify-center">
                <PiUniteSquare className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Unique artworks
                </span>
              </div>
              <div className="flex  items-center justify-center">
                <FoodIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Creative inspiration every day
                </span>
              </div>
              <div className="flex items-center justify-center">
                <GrArticle className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Creative Skill Showcases
                </span>
              </div>
              <div className="flex items-center justify-center">
                <FaPenClip className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Art workshops
                </span>
              </div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}

const FoodIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
    </svg>
  );
};
