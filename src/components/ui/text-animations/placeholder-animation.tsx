
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function PlaceholderAnimation({
  placeholders,
  className,
}: {
  placeholders: string[];
  className?: string;
}) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
  };
  
  const handleVisibilityChange = () => {
    if (document.visibilityState !== "visible" && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    } else if (document.visibilityState === "visible") {
      startAnimation();
    }
  };

  useEffect(() => {
    startAnimation();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [placeholders]);

  return (
    <motion.p
      initial={{
        y: 5,
        opacity: 0,
      }}
      key={`current-placeholder-${currentPlaceholder}`}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: -15,
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
        ease: "linear",
      }}
      className={cn(
        "text-nordic-light/70 text-sm sm:text-base font-normal pl-16 sm:pl-16 text-left w-[calc(100%-2rem)] truncate",
        className
      )}
    >
      {placeholders[currentPlaceholder]}
    </motion.p>
  );
}
