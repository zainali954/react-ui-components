import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const buttonVariants = {
  default: "bg-neutral-800 text-white hover:bg-neutral-700 dark:bg-neutral-200 dark:text-black dark:hover:bg-neutral-300",
  outline: "border border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700",
  subtle: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700",
  ghost: "hover:bg-neutral-100 text-neutral-900 dark:text-white dark:hover:bg-neutral-800",
  link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-200",
};

const buttonSizes = {
  sm: "h-7 px-3 text-xs",
  default: "h-8 px-4 text-sm",
  lg: "h-9 px-6 text-md",
  xl: "h-10 px-8 text-lg",
};

const iconSizes = {
  xs: "h-6 w-6 p-0",
  sm: "h-8 w-8 p-0",
  default: "h-9 w-9 p-0",
  lg: "h-10 w-10 p-0",
  xl: "h-12 w-12 p-0",
};

const colorVariants = {
  neutral: {
    default: "bg-neutral-800 text-white hover:bg-neutral-700 dark:bg-neutral-200 dark:text-black dark:hover:bg-neutral-300",
    outline: "border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700",
    subtle: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700",
    ghost: "hover:bg-neutral-100 text-neutral-900 dark:text-white dark:hover:bg-neutral-800",
  },

  blue: {
    default: "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
    outline: "border-blue-300 dark:border-blue-600 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20",
    subtle: "bg-blue-100 text-blue-900 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30",
    ghost: "hover:bg-blue-100 text-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20",
  },
 
  green: {
    default: "bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600",
    outline: "border-green-300 dark:border-green-600 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20",
    subtle: "bg-green-100 text-green-900 hover:bg-green-200 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30",
    ghost: "hover:bg-green-100 text-green-700 dark:text-green-400 dark:hover:bg-green-900/20",
  },
  
  red: {
    default: "bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600",
    outline: "border-red-300 dark:border-red-600 text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20",
    subtle: "bg-red-100 text-red-900 hover:bg-red-200 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",
    ghost: "hover:bg-red-100 text-red-700 dark:text-red-400 dark:hover:bg-red-900/20",
  },
  
  yellow: {
    default: "bg-yellow-600 text-white hover:bg-yellow-700 dark:bg-yellow-500 dark:hover:bg-yellow-600",
    outline: "border-yellow-300 dark:border-yellow-600 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20",
    subtle: "bg-yellow-100 text-yellow-900 hover:bg-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:hover:bg-yellow-900/30",
    ghost: "hover:bg-yellow-100 text-yellow-700 dark:text-yellow-400 dark:hover:bg-yellow-900/20",
  },
 
  purple: {
    default: "bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600",
    outline: "border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20",
    subtle: "bg-purple-100 text-purple-900 hover:bg-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:hover:bg-purple-900/30",
    ghost: "hover:bg-purple-100 text-purple-700 dark:text-purple-400 dark:hover:bg-purple-900/20",
  },
};


const Button = ({
  children,
  variant = "default",
  size = "default",
  iconSize = "default",
  isIcon = false,
  color = "neutral",
  loading = false,
  loadingText,
  className,
  disabled,
  ...props
}) => {
  // Determine which size configuration to use
  const sizeClasses = isIcon ? iconSizes[iconSize] : buttonSizes[size];

  // Get color-specific variant styles, fallback to neutral if color not found
  const colorVariant = colorVariants[color] || colorVariants.neutral;
  const variantClasses = variant === "link"
    ? buttonVariants.link
    : colorVariant[variant] || colorVariant.default;

  // Handle loading state
  const isDisabled = disabled || loading;

  return (
    <button
      className={twMerge(
        clsx(
          // Base button styles - consistent across all variants
          "inline-flex items-center justify-center rounded-md font-medium transition-colors",
          // Focus styles for accessibility
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          // Focus ring color based on button color
          color === "neutral"
            ? "focus:ring-neutral-500 dark:focus:ring-offset-black"
            : `focus:ring-${color}-500 dark:focus:ring-offset-black`,
          // Disabled state styles
          "disabled:opacity-50 disabled:pointer-events-none",
          // Apply variant styles (includes color theming)
          variantClasses,
          // Apply size styles (responsive to icon mode)
          sizeClasses,
          // Loading state cursor
          loading && "cursor-wait",
          // Custom className override
          className
        )
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <>
          {/* Loading spinner */}
          <svg
            className={clsx(
              "animate-spin",
              // Spinner size based on button size
              isIcon ? "h-4 w-4" : "h-4 w-4 mr-2"
            )}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          {/* Loading text for non-icon buttons */}
          {!isIcon && (loadingText || "Loading...")}
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;

