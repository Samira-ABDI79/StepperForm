import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./Theme/theme";
import { ThemeProvider } from "@mui/material/styles";

import StepperForm from "./components/StepperForm";

import RegistrationForm from "./pages/Form";
import DropDown from "./pages/ViewInformation";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StepperForm />} />
          <Route path="/s" element={<RegistrationForm />} />
          <Route path="/d" element={<DropDown />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
