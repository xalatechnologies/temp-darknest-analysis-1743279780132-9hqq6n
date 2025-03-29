
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline:
          "text-foreground border-white/20 hover:bg-white/5",
        accent:
          "border-transparent bg-accent text-accent-foreground hover:bg-accent/80 shadow-[0_0_10px_rgba(106,140,175,0.5)]",
        success: 
          "border-transparent bg-nordic-green/90 text-white hover:bg-nordic-green shadow-[0_0_10px_rgba(127,175,144,0.5)]",
        info:
          "border-transparent bg-nordic-blue/90 text-white hover:bg-nordic-blue shadow-[0_0_10px_rgba(106,140,175,0.5)]",
        highlight:
          "border-transparent bg-gradient-to-r from-nordic-blue to-purple-500 text-white shadow-[0_0_15px_rgba(106,140,175,0.4)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
