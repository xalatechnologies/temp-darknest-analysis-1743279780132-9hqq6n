
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { PlaceholderAnimation } from "@/components/ui/text-animations/placeholder-animation";
import { useTextVanishAnimation } from "@/hooks/use-text-vanish-animation";

export function PlaceholdersAndVanishInput({
  placeholders,
  onChange,
  onSubmit,
  className,
  buttonClassName,
  inputClassName,
  placeholderClassName,
}: {
  placeholders: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
  buttonClassName?: string;
  inputClassName?: string;
  placeholderClassName?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  
  const {
    canvasRef,
    animating,
    setAnimating,
    vanishAndSubmit,
    draw
  } = useTextVanishAnimation(value, inputRef);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !animating) {
      vanishAndSubmit();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    vanishAndSubmit();
    onSubmit && onSubmit(e);
  };

  return (
    <form
      className={cn(
        "w-full relative max-w-xl mx-auto h-12 rounded-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200",
        value && "bg-gray-50",
        "bg-nordic-charcoal/90 backdrop-blur-lg",
        className
      )}
      onSubmit={handleSubmit}
    >
      <canvas
        className={cn(
          "absolute pointer-events-none text-base transform scale-50 top-[20%] left-2 sm:left-8 origin-top-left filter invert dark:invert-0 pr-20",
          !animating ? "opacity-0" : "opacity-100"
        )}
        ref={canvasRef}
      />
      <input
        onChange={(e) => {
          if (!animating) {
            setValue(e.target.value);
            onChange && onChange(e);
          }
        }}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        value={value}
        type="text"
        className={cn(
          "w-full relative text-sm sm:text-base z-50 border-none bg-transparent text-white h-full rounded-full focus:outline-none focus:ring-0 pl-16 sm:pl-16 pr-20",
          animating && "text-transparent",
          inputClassName
        )}
      />

      <SubmitButton disabled={!value} className={buttonClassName} />

      <div className="absolute inset-0 flex items-center rounded-full pointer-events-none">
        <AnimatePresence mode="wait">
          {!value && (
            <PlaceholderAnimation 
              placeholders={placeholders} 
              className={placeholderClassName} 
            />
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

function SubmitButton({ 
  disabled, 
  className 
}: { 
  disabled: boolean; 
  className?: string 
}) {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={cn(
        "absolute right-2 top-1/2 z-50 -translate-y-1/2 h-8 w-8 rounded-full disabled:bg-nordic-blue/30 bg-nordic-blue transition duration-200 flex items-center justify-center",
        className
      )}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white h-4 w-4"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <motion.path
          d="M5 12l14 0"
          initial={{
            strokeDasharray: "50%",
            strokeDashoffset: "50%",
          }}
          animate={{
            strokeDashoffset: disabled ? "50%" : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "linear",
          }}
        />
        <path d="M13 18l6 -6" />
        <path d="M13 6l6 6" />
      </motion.svg>
    </button>
  );
}
