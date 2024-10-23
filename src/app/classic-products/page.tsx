"use client"; 
import Footer from "@/components/Footer";
import { ProductCards } from "@/components/ProductCards";
import { classic_products } from "@/data/data";
import React from "react";

const page = () => {
  return (
    <>
    <div className="h-full pb-10 dark:bg-neutral-900 bg-neutral-100 text-black dark:text-white ">
      <div className="flex flex-col md:flex-row pt-20 pb-5 md:pt-24 md:pb-[6%] items-center justify-center text-3xl md:text-5xl font-bold">
        <p className="mr-3">Classic Canvas</p>{" "}
        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
          <span className="">Collection</span>
        </div>
      </div>
      <ProductCards products={classic_products} />
    </div>
    <Footer />
  </>
  );
};

export default page;
