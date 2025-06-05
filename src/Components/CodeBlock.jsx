import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const MultiCodeBlock = ({ files }) => {
  const [activeIndex, setActiveIndex] = useState(0);
const [copied, setCopied] = useState(false);

useEffect(() => {
  if (!copied) return;

  const timeout = setTimeout(() => {
    setCopied(false);
  }, 3000);

  return () => clearTimeout(timeout); 
}, [copied]);

  


  const { fileName, code } = files[activeIndex];

  return (
    <div className="mt-6 border border-neutral-300 dark:border-neutral-700 rounded-md overflow-hidden">
      {/* Tab Buttons */}
      <div className="flex bg-neutral-100 dark:bg-neutral-800 text-sm font-mono overflow-x-auto">
        {files.map((file, idx) => (
          <button
            key={file.fileName}
            onClick={() => setActiveIndex(idx)}
            className={`px-4 py-2 transition whitespace-nowrap ${
              idx === activeIndex
                ? "bg-white dark:bg-neutral-900 text-orange-500"
                : "text-neutral-500 hover:text-orange-500"
            }`}
          >
            {file.fileName}
          </button>
        ))}
      </div>

      {/* Code Viewer */}
      <div className="relative">
        <div className="flex items-center justify-between bg-neutral-800 text-white px-4 py-2 text-xs font-mono">
          <span>{fileName}</span>
          <button
            onClick={() => {navigator.clipboard.writeText(code); setCopied(true)}}
            className="hover:text-orange-400 transition"
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          showLineNumbers
          customStyle={{ padding: "1rem", borderRadius: "0 0 0.5rem 0.5rem" }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default MultiCodeBlock;
