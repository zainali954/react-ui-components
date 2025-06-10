import React from "react";
import { ToastProvider, toast } from "./useToast";
import ToastContainer from "./ToastContainer";
import ComponentDocLayout from "../../layout/ComponentDocLayout";
import ToastCode from './Toast.jsx?raw'
import ToastContainerCode from './ToastContainer.jsx?raw'
import useToastCode from './useToast.jsx?raw'
import usageContent from './README.md?raw'

const App = () => {
  const preview = (
    <div className="flex flex-col items-center justify-center space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          {/* Basic Toasts */}
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Basic Toasts</h2>
            <button
              onClick={() => toast({ title: "Hello!", description: "This is a default toast." })}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Show Default Toast
            </button>
            <button
              onClick={() => toast({ type: "success", title: "Success!", description: "Your changes have been saved." })}
              className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
            >
              Show Success Toast
            </button>
            <button
              onClick={() => toast({ type: "error", title: "Error!", description: "Failed to load data." })}
              className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
            >
              Show Error Toast
            </button>
            <button
              onClick={() => toast({ type: "warning", title: "Warning!", description: "Disk space is low." })}
              className="w-full bg-yellow-500 text-neutral-900 py-2 px-4 rounded hover:bg-yellow-600 transition-colors"
            >
              Show Warning Toast
            </button>
            <button
              onClick={() => toast({ type: "info", title: "Info!", description: "New features available." })}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Show Info Toast
            </button>
          </div>

          {/* Custom Duration & Persistent Toasts */}
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Duration & Persistent</h2>
            <button
              onClick={() => toast({ title: "Short Toast", description: "Disappears in 1 second.", duration: 1000 })}
              className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors"
            >
              Show 1s Toast
            </button>
            <button
              onClick={() => toast({ title: "Long Toast", description: "Disappears in 7 seconds.", duration: 7000 })}
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition-colors"
            >
              Show 7s Toast
            </button>
            <button
              onClick={() => toast({ title: "Persistent Toast", description: "Click the X to close me!", duration: null })}
              className="w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors"
            >
              Show Persistent Toast
            </button>
          </div>

          {/* Toasts with Action */}
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Toasts with Action</h2>
            <button
              onClick={() =>
                toast({
                  type: "info",
                  title: "Undo Action?",
                  description: "Your item has been deleted.",
                  action: (
                    <button className="text-blue-500 hover:underline text-sm font-medium mt-2"
                      onClick={() => {
                        toast({ title: "Undo successful!", type: "success" });
                      }}
                    >
                      Undo
                    </button>
                  ),
                  duration: 5000
                })
              }
              className="w-full bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition-colors"
            >
              Show Toast with Action
            </button>
            <button
              onClick={() =>
                toast({
                  type: "warning",
                  title: "Review Changes",
                  description: "Some settings require your attention.",
                  action: (
                    <button className="text-yellow-800 hover:underline text-sm font-medium mt-2"
                      onClick={() => {
                        toast({ title: "Navigating to settings...", type: "info" });
                      }}
                    >
                      Go to Settings
                    </button>
                  ),
                  duration: null
                })
              }
              className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors"
            >
              Show Persistent Toast with Action
            </button>
          </div>
        </div>

        {/* Toast Containers for different positions */}
        {/* <div className="absolute top-0 right-0 p-4">
        </div> */}
          <ToastContainer />
        {/* <div className="absolute top-0 left-0 p-4">
          <ToastContainer position="top-left" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 p-4">
          <ToastContainer position="top-center" />
        </div>
        <div className="absolute bottom-0 left-0 p-4">
          <ToastContainer position="bottom-left" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-4">
          <ToastContainer position="bottom-center" />
        </div>
        <div className="absolute bottom-0 right-0 p-4">
          <ToastContainer position="bottom-right" />
        </div> */}

      </div>
  )
  return (
    <ToastProvider>
      <ComponentDocLayout
                  title="Toast"
                  description="The `Toast` component provides a fully accessible and customizable toast with different types like success, error, warning, info and default with options to adjust title, description and duration of toast built with tailwindcss."
                  preview={preview}
                  usageContent={usageContent}
                  files={[
                      { fileName: "Toast.jsx", code: ToastCode },
                      { fileName: "ToastContainer.jsx", code: ToastContainerCode },
                      { fileName: "useToast.jsx", code: useToastCode },
                  ]}
              />
      
    </ToastProvider>
  );
};

export default App;


