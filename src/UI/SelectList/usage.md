## Usage Guide
First, copy the `Selectlist.jsx` component into your project’s components folder. Then, carefully review the required props and see the usage examples below to integrate it properly.
### Props

| Prop         | Type                        | Required | Description                                                                 |
|--------------|-----------------------------|----------|-----------------------------------------------------------------------------|
| `selected`   | `object \| null`             | ✅       | Currently selected option object                                            |
| `setSelected`| `(option: object) => void`  | ✅       | Setter to update the selected option                                        |
| `options`    | `Array<object>`             | ✅       | List of option objects to display in the dropdown                          |
| `labelKey`   | `string`                    | ✅       | The object key used to show the label in UI                                |
| `valueKey`   | `string`                    | ✅       | The object key used for identifying selection and keys                     |

---

### Basic Example

```jsx
import React, { useState } from 'react';
import Selectlist from './Selectlist';

const Example = () => {
  const options = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'TypeScript' },
    { id: 3, name: 'Python' },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="p-4">
      <Selectlist
        selected={selected}
        setSelected={setSelected}
        options={options}
        labelKey="name"
        valueKey="id"
      />
    </div>
  );
};
```

---

### Advanced Use Case: Custom Keys

If your object has different keys:

```jsx
const colors = [
  { code: 'FF5733', title: 'Orange' },
  { code: '2ECC71', title: 'Green' },
];

<Selectlist
  selected={selectedColor}
  setSelected={setSelectedColor}
  options={colors}
  labelKey="title"
  valueKey="code"
/>
```

---

## Accessibility

- Uses `role="combobox"` and `aria-*` attributes.
- Closes on outside click.
- Indicates current selected value with a check icon.

---

## Tips

- Ensure `valueKey` values are unique in `options` list.
- Use `truncate` or `max-w` Tailwind classes for long labels.
- Wrap in a parent with proper padding for layout consistency.
