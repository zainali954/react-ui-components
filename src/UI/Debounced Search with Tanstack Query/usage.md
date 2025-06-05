## Usage Guide

This document provides instructions on how to install, use, and customize the `DebouncedSearchWithTanstackQuery` component, which implements a debounced search input using React and TanStack Query to fetch results (e.g., from the Wikipedia API).

---

### Installation and Setup

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

3. **Add Component File:** Copy the DebouncedSearchWithTanstackQuery.jsx file into your project's components directory. A common structure would be:

```bash
components/
└── DebouncedSearchWithTanstackQuery.jsx
```

> 🔗 **Source File:** [DebouncedSearchWithTanstackQuery.jsx](https://github.com/zainali954/react-ui-components/tree/main/src/UI/Debounced%20Search%20with%20Tanstack%20Query/Index.jsx)


## Basic Usage
Once installed and set up, you can import and use the component directly within your application's pages or layouts:

```jsx
import React from 'react';
import DebouncedSearchWithTanstackQuery from './components/DebouncedSearchWithTanstackQuery'; // Adjust the path if necessary

function MyPage() {
  return (
    <div>
      <h1>Wikipedia Search Example</h1>
      <p>Type in the box below to search Wikipedia:</p>
      <DebouncedSearchWithTanstackQuery />
    </div>
  );
}

export default MyPage;
```

### Props

The DebouncedSearchWithTanstackQuery component, in its current form, is designed to be self-contained and does not require any external props for basic operation. It manages its own state, including the search term and the fetched results.

If you need to customize its behavior beyond the options mentioned below, you may need to modify the component's source code to accept props for things like placeholder text, initial query, or callback functions.

### Customization

You can tailor the component's behavior by modifying its source code:

- Debounce Delay: Adjust the search input debounce timing by changing the delay value (currently set to 500ms) within the setTimeout function inside the component.

- API Endpoint: Replace the default Wikipedia API endpoint with your own backend service URL to search against custom data sources. You will need to update the axios.get call accordingly.

- Advanced Features: Extend the component's functionality by incorporating features like pagination for results, adding filtering options, or implementing infinite scrolling for a smoother user experience with large datasets.

