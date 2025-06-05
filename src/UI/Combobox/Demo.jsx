import { useState } from "react";
import Combobox from "./Combobox";
import usageContent from "./usage.md?raw";
import ComboboxCode from "./Combobox.jsx?raw";
import ComponentDocLayout from "../../layout/ComponentDocLayout";

const ComboboxDemo = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const languages = [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "JAVASCRIPT" },
        { id: 4, name: "PYTHON" },
        { id: 5, name: "C" },
        { id: 6, name: "C++" },
    ];

    const preview = (
        <div className="flex flex-col items-center gap-4">
            <Combobox
                selected={selectedLanguage}
                setSelected={setSelectedLanguage}
                options={languages}
                labelKey="name"
                valueKey="id"
            />
            {selectedLanguage && (
                <div className="text-md text-neutral-700 dark:text-neutral-300">
                    Selected:{" "}
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">
                        {selectedLanguage?.name}
                    </span>
                </div>
            )}
        </div>
    );

    return (
        <ComponentDocLayout
            title="Combobox"
            description="The `Combobox` is a searchable dropdown component built using React and TailwindCSS. It allows users to type to filter options and select from a dynamic list. It's ideal for large datasets or when users need search capabilities within a dropdown."
            preview={preview}
            usageContent={usageContent}
            files={[
                { fileName: "Combobox.jsx", code: ComboboxCode },
            ]}
        />
    );
};

export default ComboboxDemo;
