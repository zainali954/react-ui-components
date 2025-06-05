import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MarkdownRenderer from "../Components/MarkdownRenderer";
import CodeBlock from "../Components/CodeBlock";

const ComponentDocLayout = ({ title, description, preview, usageContent, files }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "preview";

  const handleTabChange = (newTab) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <div className="dark:bg-neutral-900 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl text-neutral-900 font-bold dark:text-white mb-2">
          {title}
        </h2>
        <p className="mb-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-400">
          {description}
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-0 border-b border-neutral-300 dark:border-neutral-700 mb-6">
          {["preview", "usage", "code"].map((t) => (
            <button
              key={t}
              onClick={() => handleTabChange(t)}
              className={`px-3 sm:px-4 py-2 font-medium text-sm border-b-2 transition ${
                tab === t
                  ? "border-orange-500 text-orange-600 dark:text-orange-400"
                  : "border-transparent text-neutral-500 dark:text-neutral-400 hover:text-orange-500"
              }`}
            >
              {t === "preview" ? "Preview" : t === "usage" ? "Usage / Guide" : "Code"}
            </button>
          ))}
        </div>

        {/* Content */}
        {tab === "preview" && <div className="mt-4">{preview}</div>}
        {tab === "usage" && (
          <div className="mt-6">
            <MarkdownRenderer file={usageContent} />
          </div>
        )}
        {tab === "code" && <CodeBlock files={files} />}
      </div>
    </div>
  );
};

export default ComponentDocLayout;
