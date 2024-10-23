/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { BackgroundGradient } from "./ui/background-gradient";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useProductStore } from "@/store/store";
import { Loader } from "./loader";

interface Product {
  image: string;
  name: string;
  size: string;
  price: number;
}

interface CardProps {
  products: Product[];
}

export function ProductCards({ products }: CardProps) {
  const route = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const setSelectedProduct = useProductStore((state: { setSelectedProduct: any; }) => state.setSelectedProduct);

  const handleBuyNow = (product: Product) => {
    setLoading(true);
    setSelectedProduct(product);
    setTimeout(() => {
      route.push("/payment");
      setLoading(false); 
    }, 2000); 
  };

  return (
    <>
    {loading && <Loader />}
    <div className="flex flex-wrap md:mx-5 mx-0 items-center justify-center md:gap-10 gap-5">
      {products.map((product) => (
        <>
          <div className="w-[350px]">
            <BackgroundGradient
              containerClassName="p-[1px]"
              className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
              >
              <img
                src={`${product.image}`}
                alt={product.name}
                className="object-cover h-[300px] w-full rounded-[10px]"
                />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                 {product.name}
              </p>
              <p className="text-md">
                Size <span className="text-sm text-neutral-600 dark:text-neutral-400">{product.size}</span>
              </p>
              <div className="flex justify-between mt-5 items-center">
                <div className="rounded-full px-2 py-0 text-lg font-bold">
                  Rs: {product.price} /-
                </div>
                <BackgroundGradient containerClassName="p-[0.5px]">
                  <button
                     onClick={() => handleBuyNow(product)}
                      className="rounded-full px-6 py-3 text-black dark:text-white flex items-center space-x-1 bg-white font-bold dark:bg-zinc-800"
                      >
                    <span>Buy now</span>
                  </button>
                </BackgroundGradient>
              </div>
            </BackgroundGradient>
          </div>
        </>
      ))}
    </div>
      </>
  );
}
