import { useState } from "react";
import Selectlist from "./SelectList";
import usageContent from "./usage.md?raw";
import selectListCode from "./SelectList.jsx?raw";
import ComponentDocLayout from "../../layout/ComponentDocLayout";

const SelectlistDemo = () => {
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
            <Selectlist
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
            title="Selectlist"
            description="The Selectlist is a fully accessible and customizable dropdown component built with React and TailwindCSS. It supports dynamic options and allows the parent to control the selected state, making it reusable for any dataset or structure."
            preview={preview}
            usageContent={usageContent}
            files={[
                { fileName: "Selectlist.jsx", code: selectListCode },
            ]}
        />
    );
};

export default SelectlistDemo;
