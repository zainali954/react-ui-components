import React, { useState, useEffect, useRef } from "react";

// Chevron Down Icon
const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-neutral-600 dark:text-neutral-400"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 9l6 6l6 -6" />
  </svg>
);

// Check Icon
const CheckIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`text-neutral-900 dark:text-neutral-100 ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 12l5 5l10 -10" />
  </svg>
);

// MultiSelectCombobox
const MultiSelectCombobox = ({
  selected = [],
  setSelected,
  options = [],
  labelKey = "name",
  valueKey = "id",
  placeholder = "Select items...",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(options);
  const wrapperRef = useRef();

  const handleSelect = (option) => {
    const exists = selected.some(
      (item) => item[valueKey] === option[valueKey]
    );

    const updated = exists
      ? selected.filter((item) => item[valueKey] !== option[valueKey])
      : [...selected, option];

    setSelected(updated);
    setSearchTerm("");
    onChange?.(updated);
    setIsOpen(true); // keep open
  };

  const removeTag = (item) => {
    const updated = selected.filter(
      (i) => i[valueKey] !== item[valueKey]
    );
    setSelected(updated);
    onChange?.(updated);
  };

  useEffect(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      setFiltered(options);
      return;
    }
    const newOptions = options.filter((i) =>
      i[labelKey]?.toLowerCase().includes(term)
    );
    setFiltered(newOptions);
  }, [searchTerm, options, labelKey]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!wrapperRef.current?.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div
        ref={wrapperRef}
        className="relative w-72"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {/* Input + Tags Container */}
        <div
          className="border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 rounded-xl px-2 py-1 shadow hover:border-neutral-400 dark:hover:border-neutral-600 focus-within:ring-2 focus-within:ring-neutral-500 cursor-text"
          onClick={() => setIsOpen(true)}
        >
          <div className="flex flex-wrap gap-1">
            {selected.map((item) => (
              <span
                key={item[valueKey]}
                className="flex items-center gap-1 text-sm bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-2 py-1 rounded-full"
              >
                {item[labelKey]}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTag(item);
                  }}
                  className="text-lg hover:text-red-500"
                >
                  ×
                </button>
              </span>
            ))}

            <input
              type="text"
              placeholder={placeholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsOpen(true)}
              className="flex-grow px-2 py-1 min-w-[80px] bg-transparent text-neutral-700 dark:text-neutral-200 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Chevron Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="absolute top-3 right-3"
        >
          <ChevronDown />
        </button>

        {/* Dropdown */}
        {isOpen && (
          <ul
            role="listbox"
            className="absolute top-full left-0 w-full mt-1 p-1 z-10 bg-white dark:bg-neutral-950 shadow rounded-xl max-h-60 overflow-auto"
          >
            {filtered.length > 0 ? (
              filtered.map((option) => {
                const isSelected = selected.some(
                  (item) => item[valueKey] === option[valueKey]
                );

                return (
                  <li
                    key={option[valueKey]}
                    role="option"
                    aria-selected={isSelected}
                    tabIndex={0}
                    onClick={() => handleSelect(option)}
                    className="px-3 py-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer flex justify-between items-center"
                  >
                    <span className="truncate max-w-[calc(100%-24px)]">
                      {option[labelKey]}
                    </span>
                    <span className="w-6 flex justify-end">
                      <CheckIcon className={isSelected ? 'block w-4 h-4' : 'hidden'} />
                    </span>
                  </li>
                );
              })
            ) : (
              <li className="px-3 py-2 text-neutral-500 dark:text-neutral-600">
                No options found.
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MultiSelectCombobox;
