import { BrowserRouter, Routes, Route } from "react-router-dom";

import StepperForm from "./components/StepperForm";

import RegistrationForm from "./pages/Form";
import DropDown from "./pages/ViewInformation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StepperForm />} />
        <Route path="/s" element={<RegistrationForm />} />
        <Route path="/d" element={<DropDown />} />
      </Routes>
    </BrowserRouter>
  );
}
