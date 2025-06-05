# DebouncedSearchWithTanstackQuery

`DebouncedSearchWithTanstackQuery` is a React component that uses **TanStack Query (React Query)** to fetch debounced search results from the Wikipedia API.

It helps prevent excessive API calls by delaying the request until the user stops typing for a short period (500ms).

## Features

- Debounced input handling (500ms)
- Efficient data fetching with `@tanstack/react-query`
- Caching and automatic background updates
- Wikipedia API integration
- Clean UI with dark mode support

## Installation

1. Make sure you have React and TanStack Query installed:

```bash
npm install @tanstack/react-query axios
```

2. Wrap your app with `QueryClientProvider` in main.jsx or App.jsx:
```jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>

```
3. Add component to yours components folder

```bash
components/
└── DebouncedSearchWithTanstackQuery.jsx
```

## Basic Usage

```jsx
import DebouncedSearchWithTanstackQuery from './components/DebouncedSearchWithTanstackQuery';

function App() {
  return (
    <div>
      <h1>Wikipedia Search</h1>
      <DebouncedSearchWithTanstackQuery />
    </div>
  );
}
```

## Customization
- Change the 500ms delay by modifying the setTimeout value.
- Replace the Wikipedia API with your own backend for a custom search experience.
- Extend it with pagination, filtering, or infinite scroll.
