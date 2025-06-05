import axios from "axios";
import React, { useEffect, useState } from "react";

const DebouncedSearchNormal = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchResults = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${debouncedQuery}`
      );
      setResults(response.data.query.search);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Debounce logic
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);
    return () => clearTimeout(timeout);
  }, [query]);

  useEffect(() => {
    if (!debouncedQuery.trim()) return;
    fetchResults();
  }, [debouncedQuery]);

  return (
    <div className="max-w-2xl mx-auto p-4 text-neutral-800 dark:text-neutral-100">
      <input
        type="text"
        className="w-2xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-500"
        placeholder="Search Wikipedia..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && (
        <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
          Loading...
        </p>
      )}

      <ul className="mt-4 space-y-4">
        {results.map((item) => (
          <li
            key={item.pageid}
            className="border-b border-neutral-200 dark:border-neutral-700 pb-2"
          >
            <a
              href={`https://en.wikipedia.org/?curid=${item.pageid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              {item.title}
            </a>
            <p
              className="text-sm text-neutral-700 dark:text-neutral-300"
              dangerouslySetInnerHTML={{ __html: item.snippet + "..." }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DebouncedSearchNormal;
