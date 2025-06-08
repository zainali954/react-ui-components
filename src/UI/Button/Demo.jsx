import React from "react";
import Button from "./Button";
import ButtonCode from './Button.jsx?raw'
import usageContent from './README.md?raw'
import ComponentDocLayout from "../../layout/ComponentDocLayout";

export default function ButtonDemo() {
  const preview = (
    <div className="p-6 space-y-6  min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Button Component Demo</h1>

      {/* Variants with default size */}
      <section>
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Variants (default size)</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="default" >Default</Button>
          <Button variant="outline" color="green">Outline</Button>
          <Button variant="subtle" color="red">Subtle</Button>
          <Button variant="ghost" color="yellow">Ghost</Button>
          <Button variant="link" color="purple">Link</Button>
        </div>
      </section>

      {/* Sizes for default variant */}
      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200">Sizes (default variant)</h2>
        <div className="flex gap-4 items-center flex-wrap">
          <Button size="sm" >Small (sm)</Button>
          <Button size="default" >Default</Button>
          <Button size="lg" >Large (lg)</Button>
          <Button size="xl" >Extra Large (xl)</Button>
        </div>
      </section>

      {/* Icon buttons */}
      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200">Icon Buttons</h2>
        <div className="flex gap-4 items-center flex-wrap">
          <Button isIcon iconSize="xs" color="green" aria-label="Icon XS">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </Button>
          <Button isIcon iconSize="sm" color="green" aria-label="Icon SM">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </Button>
          <Button isIcon iconSize="default" color="green" aria-label="Icon Default">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </Button>
          <Button isIcon iconSize="lg" color="green" aria-label="Icon LG">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </Button>
          <Button isIcon iconSize="xl" color="green" aria-label="Icon XL">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </Button>
        </div>
      </section>
    </div>
  )
  return (
    <ComponentDocLayout
      title="Button"
      description="A versatile React button component built with Tailwind CSS, supporting multiple styles, sizes, colors, and loading states. Designed for easy customization, accessibility, and dark mode compatibility."
      preview={preview}
      usageContent={usageContent}
      files={[
        { fileName: "Button.jsx", code: ButtonCode },
      ]}
    />
  );
}
