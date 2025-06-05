import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectListDemo from "./UI/SelectList/Demo";
import ComboboxDemo from "./UI/Combobox/Demo";
import MultiSelectDemo from "./UI/Multi Select Combobox/Demo";
import Layout from "./layout/Layout";
import Home from './Components/Home'
import DebouncedSearchNormalDemo from "./UI/Debounced Search/Demo";
import DebouncedSearchTanstackDemo from "./UI/Debounced Search with Tanstack Query/Demo"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/components/selectlist" element={<SelectListDemo />} />
          <Route path="/components/combobox" element={<ComboboxDemo />} />
          <Route path="/components/multi-select-combobox" element={<MultiSelectDemo />} />
          <Route path="/components/debounced-search" element={<DebouncedSearchNormalDemo />} />
          <Route path="/components/debounced-search-with-tanstack-query" element={<DebouncedSearchTanstackDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
