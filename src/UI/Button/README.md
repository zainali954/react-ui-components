## Button Component

A highly customizable and accessible React button component built with Tailwind CSS, supporting multiple variants, sizes, colors, and loading states. It also supports icon-only buttons and dark mode styles.

---

### Features

- Multiple button variants: `default`, `outline`, `subtle`, `ghost`, `link`
- Multiple sizes: `sm`, `default`, `lg`, `xl`
- Icon buttons with configurable icon sizes
- Color variants: `neutral`, `blue`, `green`, `red`, `yellow`, `purple`
- Loading state with spinner and optional loading text
- Disabled state handling
- Dark mode support
- Uses `clsx` and `tailwind-merge` for className management

---

### Installation & setup
Follow these steps to integrate the component into your project:
1. **Install Dependencies:** To install run the following command:
```bash
npm install clsx tailwind-merge
```
> ⚠️ **Note:** First, you need to install [Tailwind CSS](https://tailwindcss.com/docs/installation) in your app before using this component.

2. **Add Component File:** Copy the Button.jsx file into your project's components directory. A common structure would be:

```bash
components/
├── Button/
│   ├── Button.jsx
```

> 🔗 **Source File:** [Button.jsx](https://github.com/zainali954/react-ui-components/tree/main/src/UI/Button/Button.jsx)

---

### Usage

```jsx
import Button from "./Components/Button/Button";

function App() {
  return (
    <div>
      <Button variant="default" color="blue" size="lg">
        Click Me
      </Button>

      <Button variant="outline" color="green" loading loadingText="Saving...">
        Save
      </Button>

      <Button isIcon iconSize="sm" color="red">
        <svg>...</svg>
      </Button>
    </div>
  );
}
```

---

### Props

| Prop          | Type                                                              | Default     | Description                                                           |
| ------------- | ----------------------------------------------------------------- | ----------- | --------------------------------------------------------------------- |
| `children`    | ReactNode                                                         | —           | Content inside the button (text, icons, etc.)                         |
| `variant`     | `'default' \| 'outline' \| 'subtle' \| 'ghost' \| 'link'`         | `'default'` | Style variant of the button                                           |
| `size`        | `'sm' \| 'default' \| 'lg' \| 'xl'`                               | `'default'` | Size of the button (height, padding, font size)                       |
| `iconSize`    | `'xs' \| 'sm' \| 'default' \| 'lg' \| 'xl'`                       | `'default'` | Size of the icon inside the button (only applies if `isIcon` is true) |
| `isIcon`      | `boolean`                                                         | `false`     | If true, renders a square icon button with no padding around children |
| `color`       | `'neutral' \| 'blue' \| 'green' \| 'red' \| 'yellow' \| 'purple'` | `'neutral'` | Color theme of the button                                             |
| `loading`     | `boolean`                                                         | `false`     | Shows a spinner and disables the button                               |
| `loadingText` | `string`                                                          | —           | Optional text to show next to the spinner during loading              |
| `className`   | `string`                                                          | —           | Additional custom class names for styling                             |
| `disabled`    | `boolean`                                                         | `false`     | Disables the button                                                   |
| `...props`    | `button` attributes                                               | —           | Any other native button props (e.g., `onClick`, `type`)               |

---

### Example

```jsx
<Button
  variant="outline"
  size="lg"
  color="purple"
  loading
  loadingText="Please wait..."
  onClick={() => alert("Clicked")}
>
  Submit
</Button>
```

---

### Notes

* For icon-only buttons, set `isIcon` to true and provide a valid icon as children.
* The component merges Tailwind classes intelligently with `tailwind-merge` and conditionally applies classes with `clsx`.
* Dark mode styles are included and automatically apply based on your Tailwind dark mode config.
* `loading` disables the button and shows a spinner plus optional text.

---

### Example Preview

Displays a list of posts and automatically loads the next page when scrolled to the bottom:

[Live Demo](https://react-ui-components-three.vercel.app/components/button)
