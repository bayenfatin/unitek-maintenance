import { type ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "outline" | "ghost" | "urgent";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-mid active:bg-brand-dark border border-brand hover:border-brand-mid",
  outline:
    "bg-transparent text-brand border border-brand hover:bg-brand hover:text-white",
  ghost:
    "bg-transparent text-brand border border-transparent hover:bg-brand-light",
  urgent:
    "bg-urgent text-white hover:bg-urgent-dark active:bg-urgent-dark border border-urgent hover:border-urgent-dark",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 font-semibold tracking-wide transition-all duration-150 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
