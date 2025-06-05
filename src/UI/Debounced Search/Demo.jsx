import DebounceSearch from './Index'
import ComponentDocLayout from "../../layout/ComponentDocLayout"
import usageContent from "./usage.md?raw"
import DebouncedSearch from "./Index.jsx?raw"

const Demo = () => {
    const preview = (
        <div className="dark:bg-neutral-900 h-full">
            <div>
                <DebounceSearch />
            </div>
        </div>
    )

    return (
        <ComponentDocLayout
            title="Debounced Search"
            description="The `DebouncedSearchNormal` is a simple React component that demonstrates how to implement debounced search functionality using the Wikipedia API. It delays API calls while the user is typing to avoid unnecessary requests."
            preview={preview}
            usageContent={usageContent}
            files={[
                { fileName: "DebouncedSearch.jsx", code: DebouncedSearch },
            ]}
        />
    )
}

export default Demo
