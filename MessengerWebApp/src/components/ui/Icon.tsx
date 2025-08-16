import React from "react";
import * as Icons from "lucide-react";
import { cn } from "../../lib/utils";

type LucideIconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export interface IconProps {
  name: keyof typeof Icons;
  size?: "sm" | "md" | "lg" | number;
  color?: string;
  label?: string;
  onClick?: () => void;
  className?: string;
  hoverEffect?: boolean;
}

const sizeMap: Record<string, number> = {
  sm: 16,
  md: 20,
  lg: 28,
};

const Icon: React.FC<IconProps> = ({
  name,
  size = "md",
  color = "currentColor",
  label,
  onClick,
  className = "",
  hoverEffect = false,
}) => {
  const LucideIcon = Icons[name] as LucideIconComponent;
  if (!LucideIcon) return null;

  const finalSize = typeof size === "number" ? size : sizeMap[size];

  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center",
        onClick && "cursor-pointer",
        hoverEffect && "hover:opacity-75 transition-opacity",
        className
      )}
    >
      <LucideIcon width={finalSize} height={finalSize} color={color} />
      {label && <span className="ml-2 text-sm text-gray-700">{label}</span>}
    </span>
  );
};

export default Icon;
