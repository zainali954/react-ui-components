import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import  { useEffect, useState } from "react";

const DebouncedSearchWithTanstackQuery = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce logic: delay 500ms after typing
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  const fetchResults = async () => {
    const { data } = await axios.get(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${debouncedQuery}`
    );
    return data;
  };

  // useQuery runs only when `debouncedQuery` is not empty
  const {
    data: results,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["results", debouncedQuery],
    queryFn: fetchResults,
    enabled: !!debouncedQuery, // prevents initial empty fetch
  });
  return (
    <div className="max-w-2xl mx-auto p-4 text-neutral-800 dark:text-neutral-100">
      <input
        type="text"
        className="w-2xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-500"
        placeholder="Search Wikipedia..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {isPending && <p className="mt-4 text-gray-500">Loading...</p>}
      {isError && (
        <p className="mt-4 text-red-500">Error: {error.message}</p>
      )}

      <ul className="mt-4 space-y-4">
        {results?.query?.search.map((item) => (
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

export default DebouncedSearchWithTanstackQuery;
