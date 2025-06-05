import React, { useEffect, useRef } from 'react'
import useInfinitePosts from './useInfinitePosts';

const InfiniteScroll = () => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isPending,
        isError,
        error
    } = useInfinitePosts();

    const loaderRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasNextPage) {
                fetchNextPage()
            }
        })

        if (loaderRef.current) observer.observe(loaderRef.current);
        return () => observer.disconnect(loaderRef.current)
    }, [hasNextPage, fetchNextPage])

    if (isPending) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <div className="space-y-4">
            {data?.pages.map((group, i) => (
                <div key={i} className="space-y-2">
                    {group.map((post) => (
                        <div
                            key={post.id}
                            className="p-4 border  border-neutral-300 dark:border-neutral-700 rounded shadow bg-neutral-100 dark:bg-neutral-800  hover:bg-neutral-200 dark:hover:bg-neutral-700"
                        >
                            <h2 className="font-semibold text-lg">{post.title}</h2>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                {post.body}
                            </p>
                        </div>
                    ))}
                </div>
            ))}

            <div ref={loaderRef} className="h-10" />

            {isFetchingNextPage && <p>Loading more...</p>}
        </div>
    )
}

export default InfiniteScroll
