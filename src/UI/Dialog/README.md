## Dialog

A reusable and accessible **Dialog component** for React. Built using Portals, ARIA roles, and Tailwind CSS. It supports keyboard accessibility, focus trapping, dark mode, and customizable composition.

---

### Features

* Accessible modal dialog (WAI-ARIA compliant)
* Keyboard support (Escape key, Tab key for focus trapping)
* Portal-based rendering
* Fully styled with Tailwind CSS and dark mode support
* Easily composable with `DialogTrigger`, `DialogContent`, `DialogHeader`, etc.
* Customizable close button via prop

---

### Installation & setup

1. **Install Dependencies:** To install run the following command: If you have already react app then skip this.

```bash
npm install react react-dom
```

> ⚠️ **Note:** First, you need to install [Tailwind CSS](https://tailwindcss.com/docs/installation) in your app before using this component.

2. **Add Component File:** Copy the Button.jsx file into your project's components directory. A common structure would be:

```bash
components/
├── Dialog/
│   ├── Dialog.jsx
│   └── useDialog.jsx
```
> 🔗 **Source File:** [Dialog.jsx](https://github.com/zainali954/react-ui-components/tree/main/src/UI/Dialog/Dialog.jsx)

> 🔗 **Source File:** [useDialog.jsx](https://github.com/zainali954/react-ui-components/tree/main/src/UI/Dialog/useDialog.jsx)
---

### Usage

```jsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./components/Dialog/Dialog";
import { DialogProvider } from "./components/Dialog/useDialog";

function App() {

  return (
    <DialogProvider>
        <DialogTrigger>
          <button className="btn">Open Dialog</button>
        </DialogTrigger>

      <Dialog>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogDescription>
              Are you sure you want to proceed?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose>
              <button>Cancel</button>
            </DialogClose>
            <button>Confirm</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DialogProvider>
  );
}
```

---

### API Reference

| Component           | Description                                       |
| ------------------- | ------------------------------------------------- |
| `Dialog`            | Wrapper for all dialog-related components         |
| `DialogTrigger`     | Element that opens the dialog on click            |
| `DialogContent`     | Modal content, rendered in a portal               |
| `DialogHeader`      | Container for title and description               |
| `DialogTitle`       | Title for the dialog (adds ARIA ID automatically) |
| `DialogDescription` | Description text (adds ARIA ID automatically)     |
| `DialogFooter`      | Actions like buttons aligned to the bottom right  |
| `DialogClose`       | Closes the dialog when clicked                    |

---

### Customization

* **Dark Mode:** Fully compatible with `dark:` classes.
* **Close Button:** Override `CloseIcon` prop in `DialogContent` for a custom icon.
* **Styling:** Tailwind classes are used throughout. You can pass `className` to most components.

---

### Accessibility Notes

* Dialog is rendered with `role="dialog"`, `aria-modal="true"`, and proper labels.
* Focus is trapped inside the dialog while it's open.
* Escape key closes the dialog.
* `tabIndex={-1}` on container enables auto-focusing.

---

### Example Preview

A working example is available here:
[**dialog-demo**](https://react-ui-components-three.vercel.app/components/dialog)

