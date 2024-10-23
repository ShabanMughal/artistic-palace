"use client";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import { Section } from "@/components/Section";
import {Testimonial} from "@/components/Testimonial";



export default function Home() {
  return (
 
    <div className="text-black dark:text-white dark:bg-neutral-900
     bg-neutral-100 transition-colors duration-500">
      <Hero />
      <Section />
      <Product />
     <Testimonial />
     <Contact />
     <Footer />
    </div>
    
  );
}
