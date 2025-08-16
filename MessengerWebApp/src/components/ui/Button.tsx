import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";
import Icon from "./Icon";

export interface ButtonProps {
  title?: string;
  onClick?: () => void;
  link?: string;
  variant?: "primary" | "secondary" | "outline" | "danger" | string;
  size?: "sm" | "md" | "lg" | "icon" | string;
  className?: string;
  textClassName?: string;
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  link,
  variant = "",
  size = "",
  className = "",
  textClassName = "",
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  fullWidth = false,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-150 overflow-hidden gap-2";

  const variantClasses: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-green-600 text-white hover:bg-green-700",
    outline:
      "border border-blue-600 bg-transparent text-blue-600 hover:bg-blue-50",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizeClasses: Record<string, string> = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    icon: "p-2",
  };

  const buttonClasses = cn(
    baseClasses,
    variant ? variantClasses[variant] : "",
    size ? sizeClasses[size] : "",
    fullWidth && "w-full",
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const textClasses = cn(
    "whitespace-nowrap",
    textClassName,
    disabled && "text-gray-300"
  );

  const content = (
    <>
      {loading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <>
          {iconLeft && <Icon name={iconLeft} />}
          {title && <span className={textClasses}>{title}</span>}
          {iconRight && <Icon name={iconRight} />}
        </>
      )}
    </>
  );

  if (link && !disabled) {
    return (
      <Link to={link} onClick={onClick} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={!disabled && !loading ? onClick : undefined}
      disabled={disabled || loading}
      className={buttonClasses}
    >
      {content}
    </button>
  );
};

export default Button;
