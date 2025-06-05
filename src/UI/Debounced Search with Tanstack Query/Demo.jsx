import { useState } from "react"
import DebounceSearch from './Index'
import usageContent from "./usage.md?raw"
import DebouncedSearch from "./Index.jsx?raw"
import ComponentDocLayout from "../../layout/ComponentDocLayout"

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
            title="Debounced Search With Tanstack Query"
            description="`DebouncedSearchWithTanstackQuery` is a React component that uses TanStack Query (React Query) to fetch debounced search results from the Wikipedia API."
            preview={preview}
            usageContent={usageContent}
            files={[
                { fileName: "DebouncedSearchWithTanstackQuery.jsx", code: DebouncedSearch },
            ]}
        />
    )
}

export default Demo
