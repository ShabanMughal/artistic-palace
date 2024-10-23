"use client";
import React from 'react'
import { Card } from './Card';
import { products } from '@/data/data';

const Product = () => {
  return (
    <div className='h-full pb-10 md:pb-0 md:h-screen'>
        <div className="flex flex-col md:flex-row pt-20 pb-5 md:pt-24 md:pb-[6%] items-center justify-center text-2xl md:text-4xl font-bold">
        <p className="mr-3">Our Product{" "}</p>{' '}
      <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="">{" "} That Speaks to You</span>
            </div>
      </div>
      <Card products={products} />
    </div>
  )
}

export default Product;