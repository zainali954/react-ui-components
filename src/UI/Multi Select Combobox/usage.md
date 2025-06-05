## Usage Guide
First, copy the `MultiSelectCombobox.jsx` component into your project’s components folder. Then, carefully review the required props and see the usage examples below to integrate it properly.
### Props

| Prop          | Type       | Required | Default             | Description |
|---------------|------------|----------|---------------------|-------------|
| `selected`    | `array`    | ✅        | `[]`                | List of selected items |
| `setSelected` | `function` | ✅        | —                   | Callback to update selected array |
| `options`     | `array`    | ✅        | `[]`                | All selectable options |
| `labelKey`    | `string`   | ❌        | `"name"`            | Key to display labels |
| `valueKey`    | `string`   | ❌        | `"id"`              | Unique ID key in options |
| `placeholder` | `string`   | ❌        | `"Select items..."` | Input placeholder text |
| `onChange`    | `function` | ❌        | —                   | Triggered when selection changes |

---

### Basic Example

```jsx
const options = [
  { id: 1, name: "React" },
  { id: 2, name: "Vue" },
  { id: 3, name: "Svelte" },
];

const [selectedItems, setSelectedItems] = useState([]);

<MultiSelectCombobox
  selected={selectedItems}
  setSelected={setSelectedItems}
  options={options}
  onChange={(updated) => console.log("Selected:", updated)}
/>
```

---

### Advanced Use Case: Custom Keys

If your object has different keys:

```jsx
const colors = [
  { code: 'FF5733', title: 'Orange' },
  { code: '2ECC71', title: 'Green' },
];

<MultiSelectCombobox
  selected={selectedColor}
  setSelected={setSelectedColor}
  options={colors}
  labelKey="title"
  valueKey="code"
/>
```

---

### Accessibility

- Uses `role="combobox"` and `aria-*` attributes.
- Closes on outside click.
- Indicates current selected value with a check icon.

---

### Tips

- Ensure `valueKey` values are unique in `options` list.
- Use `truncate` or `max-w` Tailwind classes for long labels.
- Wrap in a parent with proper padding for layout consistency.
