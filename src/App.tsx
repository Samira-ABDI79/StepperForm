import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./Theme/theme";
import { ThemeProvider } from "@mui/material/styles";

import StepperForm from "./components/StepperForm";

import Formman from "./pages/Form";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StepperForm />} />
          <Route path="/s" element={<Formman />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
