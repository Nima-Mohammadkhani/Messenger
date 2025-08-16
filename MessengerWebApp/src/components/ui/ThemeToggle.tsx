import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../lib/useTheme";
import { cn } from "../../lib/utils";

export interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = "",
  size = "md",
  showLabel = false,
}) => {
  const { theme, toggleTheme } = useTheme();

  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "inline-flex items-center justify-center rounded-lg transition-all duration-200 hover:bg-base-200",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        sizeClasses[size],
        className
      )}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon size={iconSize[size]} className="text-base-content" />
      ) : (
        <Sun size={iconSize[size]} className="text-base-content" />
      )}

      {showLabel && (
        <span className="ml-2 text-sm font-medium text-base-content">
          {theme === "light" ? "Dark" : "Light"} Mode
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
