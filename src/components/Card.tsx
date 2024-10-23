"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { useRouter } from "next/navigation";
import { Loader } from "./loader";


interface Product {
  image: string;
  name: string;
  description: string;
  price: number;
  route: string;
}

interface CardProps {
  products: Product[];
}

export function Card({ products }: CardProps) {
  const route = useRouter()
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleNavigate = (product: Product) => {
    setLoading(true);
    setTimeout(() => {
      route.push(`${product.route}`);
      setLoading(false); 
    }, 2000); 
  };
  return (
    <>
    {loading && <Loader />}
    <div className="flex flex-wrap mx-5 items-center justify-center gap-10">
      {products.map((product, index) => (
        <>
          <div key={index}>
            <BackgroundGradient containerClassName="p-[2px]" className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <img
                src={`${product.image}`}
                alt="jordans"
                className="object-cover h-[200px] w-full rounded-[10px]"
                />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {product.name}
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {product.description}
              </p>
              <div className="flex justify-between mt-5 items-center">
                <div className="rounded-full px-2 py-0 text-white text-lg font-bold">

                </div>
                <BackgroundGradient containerClassName="p-[0.5px]">
              <button onClick={() => handleNavigate(product)}
              className="rounded-full px-6 py-3 flex items-center space-x-1 bg-white font-bold dark:bg-zinc-800">
                <span>Click here</span>
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
