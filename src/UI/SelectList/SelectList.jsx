import React, { useState, useRef, useEffect } from 'react';

const Selectlist = ({ selected, setSelected, options, labelKey, valueKey }) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef();

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!wrapperRef.current?.contains(e.target)) setIsOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const ChevronDown = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
            className=" text-neutral-600 dark:text-neutral-400  icon icon-tabler icon-tabler-chevron-down">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 9l6 6l6 -6" />
        </svg>
    );

    const CheckIcon = ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
            className={` text-neutral-600 dark:text-neutral-400  icon icon-tabler icon-tabler-check ${className}`}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
        </svg>
    );

    return (
        <div
            ref={wrapperRef}
            className="relative w-64"
            role="combobox"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-labelledby="select-label"
        >
            <button
                id="select-label"
                onClick={() => setIsOpen((prev) => !prev)}
                className="group px-4 py-2 flex items-center justify-between gap-4 rounded-xl border border-neutral-300 bg-white dark:bg-neutral-950 dark:border-neutral-800 shadow hover:border-neutral-400 dark:hover:border-neutral-700 w-full focus:outline-none focus:ring-2 focus:ring-neutral-500"
                aria-controls="select-options"
            >
                <span className="text-neutral-700 group-hover:text-neutral-900 dark:text-neutral-300 dark:group-hover:text-neutral-200 truncate">
                    {selected?.[labelKey] || 'Select an Option'}
                </span>
                <ChevronDown />
            </button>

            {isOpen && (
                <div
                    id="select-options"
                    role="listbox"
                    className="absolute top-12 left-0 p-1 bg-white dark:bg-neutral-950 w-full shadow rounded-xl max-h-60 overflow-auto z-10"
                >
                    {options.map((option) => (
                        <div
                            key={option[valueKey]}
                            role="option"
                            aria-selected={selected?.[valueKey] === option[valueKey]}
                            tabIndex={0}
                            onClick={() => handleSelect(option)}
                            className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer px-2 py-1 rounded-lg flex justify-between items-center"
                        >
                            <span className="truncate max-w-[calc(100%-24px)]">
                                {option[labelKey]}
                            </span>
                            <span className="w-6 flex justify-end">
                                <CheckIcon className={`${selected?.[valueKey] === option[valueKey] ? 'block' : 'hidden'} w-4 h-4 text-neutral-900 dark:text-neutral-100`} />
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Selectlist;
