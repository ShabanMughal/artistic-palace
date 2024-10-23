"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface Option {
  value: number;
  label: string;
}

export interface DropdownProps {
  options: Option[];
  onChange: (label: string) => void;
  selectedValue?: string; 
  placeholder?: string;
}

const Dropdown = ({ options, onChange, selectedValue, placeholder }: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const radius = 100; 
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const handleOptionClick = (option: Option) => {
    onChange(option.label || option.value.toString());
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.div
        style={{
          background: useMotionTemplate`
          radial-gradient(
            ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
            var(--blue-500),
            transparent 80%
          )
        `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex h-10 w-full bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm">
        {selectedValue || placeholder || "Select an option"}
        </div>
      </motion.div>
      {isOpen && (
        <motion.div
          className="absolute z-10 w-full bg-white dark:bg-zinc-800 shadow-lg rounded-md mt-1 overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          {options.map((option) => (
            <motion.div
              key={option.value}
              className={cn(
                "cursor-pointer flex justify-between px-4 py-2 text-sm text-black dark:text-white hover:bg-blue-500 hover:text-white",
                selectedValue === option.value.toString() ? "bg-blue-500 text-white" : ""
              )}
              onClick={() => handleOptionClick(option)}
              whileTap={{ scale: 0.95 }} 
            >
                <span>{option.label} </span>
              <span>Rs {option.value}/-</span>
              
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export { Dropdown };
