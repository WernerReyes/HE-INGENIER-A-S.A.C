import * as React from "react";
import { cn } from "../utils/cs";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: LucideIcon; // Icono dinámico
  children: React.ReactNode; // Texto dentro del botón
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, icon: Icon, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2",
          className
        )}
        ref={ref}
        {...props}
      >
        {Icon && <Icon size={20} />}
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
