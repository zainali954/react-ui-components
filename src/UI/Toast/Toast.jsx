import React from "react";

// Close icon (inline SVG)
const CloseIcon = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 6L6 18" />
    <path d="M6 6L18 18" />
  </svg>
);

// Icons for different toast types
const ToastIcons = {
  success: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  error: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  ),
  warning: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5"
    >
      <path d="M12 9v4" />
      <path d="M12 16h.01" />
      <path d="M10.29 3.86L1.82 18a1 1 0 0 0 .86 1.5h18.64a1 1 0 0 0 .86-1.5L13.71 3.86a1 1 0 0 0-1.72 0z" />
    </svg>
  ),
  info: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5"
    >
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="12" y2="8" />
      <line x1="12" y1="12" x2="12" y2="16" />
    </svg>
  ),
};

const Toast = ({
  id,
  type = "default",
  title,
  description,
  action,
  onClose,
  onPause,
  onResume,
  duration,
}) => {
  const typeClasses = {
    default:
      "bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white",

    success:
      "bg-green-50 dark:bg-[#071E10] border border-green-200 dark:border-green-600 text-green-900 dark:text-green-100",

    error:
      "bg-red-50 dark:bg-[#2E1516] border border-red-200 dark:border-red-600 text-red-900 dark:text-red-100",

    warning:
      "bg-yellow-50 dark:bg-[#3C3215] border border-yellow-200 dark:border-yellow-600 text-yellow-900 dark:text-yellow-100",

    info:
      "bg-blue-50 dark:bg-[#15253E] border border-blue-200 dark:border-blue-600 text-blue-900 dark:text-blue-100",
  };

  const buttonTypeClasses = {
    default:
      "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100",
    success:
      "text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-100",
    error:
      "text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-100",
    warning:
      "text-yellow-600 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-100",
    info:
      "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-100",
  };

  const handleMouseEnter = () => onPause(id);
  const handleMouseLeave = () => onResume(id, duration);

  return (
    <div
      className={`relative p-4 rounded-lg shadow-lg mb-3 pointer-events-auto w-full max-w-xs flex items-start gap-3 ${typeClasses[type]}`}
      role="status"
      aria-live="polite"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Icon */}
      <div className="pt-0.5">{ToastIcons[type]}</div>

      {/* Content */}
      <div className="flex-1">
        {title && <p className="font-semibold text-sm mb-1">{title}</p>}
        {description && <p className="text-sm opacity-90">{description}</p>}
        {action && <div className="mt-3">{action}</div>}
      </div>

      {/* Close Button */}
      <button
        onClick={() => onClose(id)}
        className={`flex-shrink-0 p-1 rounded-md transition-colors ${buttonTypeClasses[type]}`}
        aria-label="Close notification"
      >
        <CloseIcon size={16} />
      </button>
    </div>
  );
};

export default Toast;
