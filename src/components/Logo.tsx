
import { Building, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Logo = ({ size = "md", className }: LogoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <Home className="text-homehunt-600 h-6 w-6" />
        <Building className="text-homehunt-800 absolute -bottom-1 -right-1 h-4 w-4" />
      </div>
      <span className={cn("font-bold tracking-tight text-homehunt-800", sizeClasses[size])}>
        HomeHunt
      </span>
    </div>
  );
};
