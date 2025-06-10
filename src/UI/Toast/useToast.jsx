import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';

const ToastContext = createContext(undefined);

let toastIdCounter = 0;

// Global function to add toasts, will be set by the provider
let globalAddToast = (props) => {
    console.warn("Toast function not initialized. Ensure ToastProvider is rendered.");
};

export const toast = (props) => {
    return globalAddToast(props);
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);
    const timeoutsRef = useRef({});

    const addToast = useCallback((toastProps) => {
        const id = toastProps.id || ++toastIdCounter;
        setToasts((prevToasts) => [{
            id,
            ...toastProps,
            // Add a property to track if the toast is paused (e.g., on hover)
            paused: false,
        }, ...prevToasts]); // Add new toasts to the top for stacking

        // Set auto-dismiss timeout
        const duration = toastProps.duration === undefined ? 4000 : toastProps.duration;
        if (duration !== null) { // If duration is null, toast does not auto-dismiss
            timeoutsRef.current[id] = setTimeout(() => {
                removeToast(id);
            }, duration);
        }

        return id;
    }, []);

    const removeToast = useCallback((id) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
        if (timeoutsRef.current[id]) {
            clearTimeout(timeoutsRef.current[id]);
            delete timeoutsRef.current[id];
        }
    }, []);

    const pauseToast = useCallback((id) => {
        setToasts(prevToasts =>
            prevToasts.map(toast =>
                toast.id === id ? { ...toast, paused: true } : toast
            )
        );
        if (timeoutsRef.current[id]) {
            clearTimeout(timeoutsRef.current[id]);
            delete timeoutsRef.current[id];
        }
    }, []);

    const resumeToast = useCallback((id, duration) => {
        setToasts(prevToasts =>
            prevToasts.map(toast =>
                toast.id === id ? { ...toast, paused: false } : toast
            )
        );
        if (duration !== null) {
            timeoutsRef.current[id] = setTimeout(() => {
                removeToast(id);
            }, duration);
        }
    }, [removeToast]);

    // Expose global addToast function once provider is mounted
    useEffect(() => {
        globalAddToast = addToast;
        return () => {
            // Clean up global function on unmount
            globalAddToast = (props) => {
                console.warn("Toast function not initialized. Ensure ToastProvider is rendered.");
            };
            // Clear all timeouts if provider unmounts
            Object.values(timeoutsRef.current).forEach(clearTimeout);
            timeoutsRef.current = {};
        };
    }, [addToast]);

    const value = { addToast, removeToast, pauseToast, resumeToast, toasts };


    return (
        <ToastContext.Provider value={value}>
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error("useToast must be used within a ToastProvider");
    return context;
};
