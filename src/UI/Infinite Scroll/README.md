
## InfiniteScroll

A performant and minimal **infinite scroll component** using React and [TanStack React Query](https://tanstack.com/query/v5). Fetches paginated posts on scroll using the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/).

---

### Features

- Infinite scrolling with automatic page loading
- Powered by `@tanstack/react-query` and `IntersectionObserver`
- Supports pagination out of the box
- Fully styled with Tailwind CSS and dark mode support
- Easily pluggable into any blog, feed, or listing UI

---

### Installation & setup

Follow these steps to integrate the component into your project:

1. **Install Dependencies:** Ensure you have React and the necessary TanStack Query library installed in your project. If not, run the following command:
```bash
npm install @tanstack/react-query axios
```

> ⚠️ **Note:** First, you need to install [Tailwind CSS](https://tailwindcss.com/docs/installation) in your app before using this component.


2. **Configure QueryClientProvider:** Wrap your application's root component (e.g., in `main.jsx` or `App.jsx`) with QueryClientProvider to enable TanStack Query functionalities throughout your app.

```jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>

```

3. **Add Component File:** Copy the InfiniteScroll.jsx file into your project's components directory. A common structure would be:

```bash
components/
└── InfiniteScroll.jsx
```

> 🔗 **Source File:** [InfiniteScroll.jsx](https://github.com/zainali954/react-ui-components/tree/main/src/UI/Infinite%20Scroll/Index.jsx)

---

### Usage

#### Component Example

```jsx
import InfiniteScroll from "./InfiniteScroll";

function App() {
  return <InfiniteScroll />;
}
```

---

### Props

This component does not require props by default, but you can extend it to accept:

| Prop Name    | Type       | Default           | Description                                 |
| ------------ | ---------- | ----------------- | ------------------------------------------- |
| `limit`      | `number`   | `10`              | Number of posts per page (via `fetchPosts`) |
| `endpoint`   | `string`   | `JSONPlaceholder` | Replaceable API source if needed            |
| `renderPost` | `function` | —                 | Optional custom renderer for each post      |

---

### Customization

* **API Layer**: The posts are fetched from `https://jsonplaceholder.typicode.com/posts`. You can replace this in `post.js`.
* **Pagination Logic**: Controlled by `getNextPageParam` in `useInfiniteQuery`.
* **Styles**: Uses Tailwind for layout, shadows, and responsiveness. Override as needed.

---

### Related Files

```bash
/components
  └── InfiniteScroll.jsx
  └── useInfinitePosts.js
  └── post.js
```

### `useInfinitePosts.js`

```js
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPosts } from './post';

const useInfinitePosts = () => {
  return useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
  });
};

export default useInfinitePosts;
```

### `post.js`

```js
import axios from "axios";

export const fetchPosts = async ({ pageParam = 1 }) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageParam}`
  );
  return response.data;
};
```

---

### Example Preview

Displays a list of posts and automatically loads the next page when scrolled to the bottom:

[Live Demo](https://react-ui-components-three.vercel.app/components/infinite-scroll?tab=preview)


