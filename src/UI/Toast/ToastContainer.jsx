import React from "react";
import ReactDOM from "react-dom";
import { useToast } from "./useToast";
import Toast from "./Toast"; // Import the individual Toast component

const ToastContainer = ({ position = "bottom-right", limit = 5 }) => {
  const { toasts, removeToast, pauseToast, resumeToast } = useToast();

  const getPositionClasses = (pos) => {
    switch (pos) {
      case "top-left":
        return "top-0 left-0 items-start justify-start flex-col-reverse"; // Reverse for top stacking
      case "top-center":
        return "top-0 left-1/2 -translate-x-1/2 items-start justify-center flex-col-reverse"; // Reverse for top stacking
      case "top-right":
        return "top-0 right-0 items-start justify-end flex-col-reverse"; // Reverse for top stacking
      case "bottom-left":
        return "bottom-0 left-0 items-end justify-start flex-col";
      case "bottom-center":
        return "bottom-0 left-1/2 -translate-x-1/2 items-end justify-center flex-col";
      case "bottom-right":
      default:
        return "bottom-0 right-0 items-end justify-end flex-col";
    }
  };

  // Filter toasts based on the limit
  const displayedToasts = toasts.slice(0, limit);

  if (displayedToasts.length === 0) return null;

  return ReactDOM.createPortal(
    <div
      className={`fixed z-[9999] p-4 flex pointer-events-none w-full max-w-sm ${getPositionClasses(position)}`}
      aria-live="polite"
      aria-atomic="true"
    >
      {displayedToasts.map((toastProps) => (
        <Toast
          key={toastProps.id}
          {...toastProps}
          onClose={removeToast}
          onPause={pauseToast}
          onResume={resumeToast}
        />
      ))}
    </div>,
    document.body
  );
};

export default ToastContainer;


