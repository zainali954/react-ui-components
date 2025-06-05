import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const MarkdownRenderer = ({ file }) => {
  return (
    <div className="prose prose-neutral dark:prose-invert overflow-x-auto max-w-none prose-sm">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} 
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={tomorrow}
                language={match[1]}
                PreTag="div"
                className="rounded-md"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          table({ children }) {
            return (
              <div className="overflow-auto">
                <table className="table-auto border-collapse w-full border border-neutral-300 dark:border-neutral-700">
                  {children}
                </table>
              </div>
            );
          },
          th({ children }) {
            return (
              <th className="border border-neutral-300 dark:border-neutral-700 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-left font-medium">
                {children}
              </th>
            );
          },
          td({ children }) {
            return (
              <td className="border border-neutral-300 dark:border-neutral-700 px-4 py-2">
                {children}
              </td>
            );
          },
        }}
      >
        {file}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
