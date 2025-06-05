import React from 'react'
import InfiniteScroll from './InfiniteScroll'
import ComponentDocLayout from '../../layout/ComponentDocLayout'
import usageContent from './README.md?raw'
import ComponentCode from './InfiniteScroll.jsx?raw'
import apiFile from './post.js?raw'
import useInfinitePostsHook from './useInfinitePosts.js?raw'

const Demo = () => {
    const preview = (
        <div>
            <h2 className='text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100'>Infinite Posts</h2>
            <InfiniteScroll/>
        </div>
    )
  return (
    <ComponentDocLayout
            title="Infinite Scroll"
            description="The `InfiniteScroll` component enables infinite scrolling using the `IntersectionObserver` API along with `@tanstack/react-query`'s `useInfiniteQuery`. As the user scrolls near the bottom, it automatically fetches the next page of posts."
            preview={preview}
            usageContent={usageContent}
            files={[
                { fileName: "InfiniteScroll.jsx", code: ComponentCode },
                { fileName: "post.js", code: apiFile },
                { fileName: "useInfinitePosts.js", code: useInfinitePostsHook },
            ]}
        />
  )
}

export default Demo
