import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectListDemo from "./UI/SelectList/Demo";
import ComboboxDemo from "./UI/Combobox/Demo";
import MultiSelectDemo from "./UI/Multi Select Combobox/Demo";
import Layout from "./layout/layout";
import Home from './Components/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/components/selectlist" element={<SelectListDemo />} />
          <Route path="/components/combobox" element={<ComboboxDemo />} />
          <Route path="/components/multi-select-combobox" element={<MultiSelectDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
