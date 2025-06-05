import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchPosts } from './post'
const useInfinitePosts = () => {
    return useInfiniteQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        getNextPageParam: (_lastPage, allPages) => {
            return allPages.length + 1;
        }
    })
}

export default useInfinitePosts;