import React, { useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import useDialog from "./useDialog";

// A simple inline SVG for the close icon to reduce external dependencies
const DefaultCloseIcon = ({ size = 18, className = "" }) => (
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

export const DialogTrigger = ({ children }) => {
  const { openDialog } = useDialog();
  const child = React.Children.only(children);

  return React.cloneElement(child, {
    onClick: (event) => {
      openDialog();
      if (child.props.onClick) {
        child.props.onClick(event);
      }
    },
    "aria-haspopup": "dialog",
  });
};

export const DialogClose = ({ children }) => {
  const { closeDialog } = useDialog();
  const child = React.Children.only(children);

  return React.cloneElement(child, {
    onClick: (event) => {
      closeDialog();
      if (child.props.onClick) {
        child.props.onClick(event);
      }
    },
  });
};

export const DialogContent = ({ children, className = "", CloseIcon = DefaultCloseIcon }) => {
  const { isOpen, closeDialog } = useDialog();
  const contentRef = useRef(null);
  const titleId = React.useId();
  const descriptionId = React.useId();

  // Focus management and Escape key handling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        closeDialog();
      }
      // Basic focus trapping (can be enhanced with a dedicated library)
      if (event.key === "Tab") {
        const focusableElements = contentRef.current.querySelectorAll(
          "button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])"
        );
        if (!focusableElements?.length) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };

    // Focus the dialog content when it opens
    contentRef.current?.focus();

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeDialog]);

  if (!isOpen) return null;

  // Render using a Portal
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      tabIndex="-1" // Make the dialog content focusable
      ref={contentRef}
    >
      <div
        className={`relative w-full bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg ${className}`}
      >
        <button
          onClick={closeDialog}
          className="absolute top-5 right-5 text-neutral-600 dark:text-neutral-400 hover:dark:text-neutral-100 hover:text-neutral-950 hover:cursor-pointer"
          aria-label="Close dialog"
        >
          <CloseIcon size={18} />
        </button>
        {React.Children.map(children, child => {
          if (React.isValidElement(child) && child.type === DialogTitle) {
            return React.cloneElement(child, { id: titleId });
          }
          if (React.isValidElement(child) && child.type === DialogDescription) {
            return React.cloneElement(child, { id: descriptionId });
          }
          return child;
        })}
      </div>
    </div>,
    document.body // Append to body
  );
};

export const DialogHeader = ({ children, className = "" }) => (
  <div className={`flex flex-col space-y-1.5 text-center sm:text-left mb-4  ${className}`}>
    {children}
  </div>
);

export const DialogTitle = ({ children, className = "", id }) => (
  <h2 id={id} className={`text-lg font-semibold leading-none tracking-tight dark:text-neutral-100 ${className}`}>
    {children}
  </h2>
);

export const DialogDescription = ({ children, className = "", id }) => (
  <p id={id} className={`text-sm text-neutral-500 dark:text-neutral-400 ${className}`}>
    {children}
  </p>
);

export const DialogFooter = ({ children, className = "" }) => (
  <div className={`mt-6 flex justify-end space-x-2 ${className}`}>{children}</div>
);

export const Dialog = ({ children }) => <>{children}</>;