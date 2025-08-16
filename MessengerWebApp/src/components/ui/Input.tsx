import React, { forwardRef, useState } from "react";
import { cn } from "../../lib/utils";
import { Eye, EyeOff } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  secureTextEntry?: boolean;
  secureToggle?: boolean;
  containerClassName?: string;
  inputClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      leftIcon,
      rightIcon,
      secureTextEntry,
      secureToggle = false,
      containerClassName = "",
      inputClassName = "",
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hidePassword, setHidePassword] = useState(!!secureTextEntry);

    return (
      <div className={cn("mb-4", containerClassName)}>
        {label && <label className="mb-1 block">{label}</label>}

        <div
          className={cn(
            "flex items-center border rounded-lg px-3 transition-colors",
            isFocused ? "border-primary" : "border-gray-300",
            error && "border-red-500"
          )}
        >
          {leftIcon && <span className="mr-2 text-gray-400">{leftIcon}</span>}

          <input
            ref={ref}
            type={hidePassword ? "password" : "text"}
            className={cn(
              "flex-1 py-2 text-base outline-none bg-transparent",
              inputClassName
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />

          {secureToggle ? (
            <button
              type="button"
              onClick={() => setHidePassword(!hidePassword)}
              className="ml-2 text-gray-400 hover:text-gray-600"
            >
              {hidePassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          ) : (
            rightIcon && <span className="ml-2 text-gray-400">{rightIcon}</span>
          )}
        </div>

        {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
