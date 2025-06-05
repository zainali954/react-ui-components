## Usage Guide

First, copy the component into your `components` folder. Then import and use it directly in your React page or layout.

---

### Props

This component does not require any props and manages all state internally. You can modify or extend it to accept props if needed.

---

### Explanation

- `query`: Tracks user input.
- `debouncedQuery`: A delayed version of `query`, updated after 500ms of inactivity.
- `useEffect #1`: Debounces the `query` and updates `debouncedQuery` after 500ms.
- `useEffect #2`: When `debouncedQuery` changes, it fetches search results from Wikipedia.
- `axios`: Used to fetch results from Wikipedia API.

---

### Customization Tips

- **Change debounce delay:** Modify the `setTimeout` delay in the first `useEffect` (e.g., `500` ms).
- **Use another API:** Replace the Wikipedia URL in `axios.get(...)` with your custom API.
- **Add error handling or retry logic** to make it more robust.
- **Pass in `query` or API URL as props** for reusability.

---

### Example Output

```jsx
<Search Wikipedia...>
↓ Results will appear below ↓

- React (link)
- JavaScript (link)
- Frontend frameworks (link)
```
