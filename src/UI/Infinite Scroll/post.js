import axios from "axios"

export const fetchPosts = async ({pageParam=1})=>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageParam}`)
    return response.data
}