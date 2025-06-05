## Usage Guide

First, copy the `Combobox.jsx` component into your project’s components folder. Then, carefully review the required props and see the usage examples below to integrate it properly.

### Props

| Prop         | Type                        | Required | Description                                                                            |
|--------------|-----------------------------|----------|----------------------------------------------------------------------------------------|
| `selected`   | `object \| null`             | ✅       | Currently selected option object                                                       |
| `setSelected`| `(option: object) => void`  | ✅       | Setter to update the selected option                                                   |
| `options`    | `Array<object>`             | ✅       | List of available option objects                                                       |
| `labelKey`   | `string`                    | ❌       | Key used to display label in options (default is `"name"`)                            |
| `valueKey`   | `string`                    | ❌       | Key used as unique identifier (default is `"id"`)                                     |
| `placeholder`| `string`                    | ❌       | Placeholder text for the search input                                                  |
| `onChange`   | `(option: object) => void`  | ❌       | Optional callback triggered on selection change                                        |

---

### Basic Example

```jsx
import React, { useState } from 'react';
import Combobox from './Combobox';

const Example = () => {
  const options = [
    { id: 1, name: 'React' },
    { id: 2, name: 'Vue' },
    { id: 3, name: 'Angular' },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <Combobox
      selected={selected}
      setSelected={setSelected}
      options={options}
      labelKey="name"
      valueKey="id"
      placeholder="Choose a framework"
    />
  );
};
```

---

### Advanced Use Case: onChange callback

```jsx
<Combobox
  selected={selected}
  setSelected={setSelected}
  options={frameworks}
  onChange={(option) => console.log('Selected:', option)}
/>
```

---

### ♿ Accessibility

- Uses `role="combobox"` and `aria-*` attributes
- Closes on `Escape` key and outside click
- Fully navigable via keyboard

---

### Tips

- Filter large datasets in `options` before passing for performance
- Keep `valueKey` unique across the dataset
- Customize `labelKey` and `valueKey` to fit any data shape
