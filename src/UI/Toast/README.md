## Toast Component

A reusable, customizable toast notification system built with **React** and **Tailwind CSS**. Supports multiple toast types, actions, persistent/dismissable behavior, and works in both light & dark mode.

---

### Mandatory Setup

To start using the Toast component, you **must** follow these steps:

1. #### Wrap your app with `<ToastProvider>`

This allows toast state to be shared across your app.

**In your `App.jsx`:**

```jsx
import { ToastProvider } from "./components/Toast/useToast";

function App() {
  return (
    <ToastProvider>
      {/* Your app content here */}
    </ToastProvider>
  );
}
```

---

2. #### Add `<ToastContainer />` inside the provider

This renders all active toasts. You can position it anywhere on the screen (top-right, bottom-center, etc.).

**Example:**

```jsx
import ToastContainer from "./components/Toast/ToastContainer";

function App() {
  return (
    <ToastProvider>
      <MainContent />

      {/* Position can be: top-right, top-left, top-center, bottom-right, etc. */}
      <ToastContainer position="top-right" />
    </ToastProvider>
  );
}
```

You can add multiple containers in different corners if needed.

---

### Usage (Triggering Toasts)

Use the `toast()` function to trigger toasts from any component.

#### Basic toast:

```jsx
import { toast } from "./components/Toast/useToast";

toast({
  title: "Hello!",
  description: "This is a default toast.",
});
```

#### Success toast:

```jsx
toast({
  type: "success",
  title: "Success!",
  description: "Your changes have been saved.",
});
```

#### Error toast:

```jsx
toast({
  type: "error",
  title: "Error!",
  description: "Something went wrong.",
});
```

---

#### Duration Control

You can control how long a toast stays visible.

* `duration`: Time in milliseconds
* `null`: Stays until manually closed

```jsx
toast({
  title: "Short Toast",
  description: "Disappears in 1 second",
  duration: 1000,
});

toast({
  title: "Persistent Toast",
  description: "Click the X to close",
  duration: null,
});
```

---

#### Toast with Action Button

```jsx
toast({
  type: "info",
  title: "Undo Action?",
  description: "Your item has been deleted.",
  action: (
    <button
      onClick={() => toast({ title: "Undo successful!", type: "success" })}
      className="text-blue-500 hover:underline text-sm font-medium mt-2"
    >
      Undo
    </button>
  ),
  duration: 5000,
});
```

---

### Supported Toast Types

| Type      | Color   | Use Case                |
| --------- | ------- | ----------------------- |
| `default` | neutral | Generic notifications   |
| `success` | green   | Confirmation or success |
| `error`   | red     | Errors and failures     |
| `warning` | yellow  | Warnings or attention   |
| `info`    | blue    | Informational messages  |

---

### Components Overview

| File                 | Purpose                                |
| -------------------- | -------------------------------------- |
| `Toast.jsx`          | UI for each toast with icons and close |
| `ToastContainer.jsx` | Manages toast stack for a position     |
| `useToast.js`        | Context, reducer, and dispatch logic   |

---

### Demo Snippets Included

The `demo.jsx` file provides a complete playground. It shows:

* Default toasts
* Duration variations
* Persistent toasts
* Toasts with actions
* Multiple styled buttons

Refer to `demo.jsx` for ready-made code snippets.

---
