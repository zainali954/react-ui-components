import { useState } from "react"
import MultiSelectCombobox from "./MultiSelectCombobox";
import usageContent from "./usage.md?raw"
import ComponentCode from "./MultiSelectCombobox.jsx?raw"
import ComponentDocLayout from "../../layout/ComponentDocLayout";


const Demo = () => {
    const [selectedTags, setSelectedTags] = useState([]);

    const allTags = [
        { id: 1, name: "JavaScript" },
        { id: 2, name: "React" },
        { id: 3, name: "Node.js" },
        { id: 4, name: "MongoDB" },
    ];
    const preview = (
        <div className="flex items-center justify-center flex-col gap-2 mt-20">
            <div className=''>
                <MultiSelectCombobox
                    selected={selectedTags}
                    setSelected={setSelectedTags}
                    options={allTags}
                    labelKey="name"
                    valueKey="id"
                    placeholder="Select tags..."
                />
            </div>

        </div>
    )
    return (
        <div>
            <ComponentDocLayout
                title="MultiSelect Combobox"
                description="The `MultiSelectCombobox` is a reusable React component that allows users to select multiple options from a searchable dropdown list with tagging support. It includes keyboard accessibility, dark mode support, and responsive behavior."
                preview={preview}
                usageContent={usageContent}
                files={[
                    { fileName: "MultiSelectCombobox.jsx", code: ComponentCode },
                ]}
            />
        </div>
    )
}

export default Demo
