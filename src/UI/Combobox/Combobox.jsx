import React, { useState, useRef, useEffect } from 'react';

// Reusable icons
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

// Main Combobox
const Combobox = ({
  selected,
  setSelected,
  options,
  labelKey = "name",
  valueKey = "id",
  placeholder = "Select an option",
  onChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState(options);
  const wrapperRef = useRef();

  const handleSelect = (option) => {
    setSelected(option);
    setSearchTerm(option[labelKey]);
    setIsOpen(false);
    onChange?.(option);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!wrapperRef.current?.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Filtering
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

  return (
    <div className="flex items-center justify-center">
      <div
        ref={wrapperRef}
        className="relative w-64"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="relative w-full">
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            className="px-4 py-2 pr-9 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-200 shadow hover:border-neutral-400 dark:hover:border-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
          />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="absolute top-3 right-3"
          >
            <ChevronDown />
          </button>
        </div>

        {isOpen && (
          <ul
            role="listbox"
            className="absolute top-12 left-0 w-full bg-white dark:bg-neutral-950 shadow rounded-xl max-h-60 overflow-auto z-10 p-1"
          >
            {filtered.length > 0 ? (
              filtered.map((option) => (
                <li
                  key={option[valueKey]}
                  role="option"
                  aria-selected={selected?.[valueKey] === option[valueKey]}
                  tabIndex={0}
                  onClick={() => handleSelect(option)}
                  className={`px-3 py-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer flex justify-between items-center`}
                >
                  <span className="truncate max-w-[calc(100%-24px)]">
                    {option[labelKey]}
                  </span>
                  <span className="w-6 flex justify-end">
                    <CheckIcon className={`${selected?.[valueKey] === option[valueKey] ? 'block' : 'hidden'} w-4 h-4`} />
                  </span>
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-neutral-500 dark:text-neutral-600">No options found.</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Combobox;
