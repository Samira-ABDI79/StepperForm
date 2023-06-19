import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./Theme/theme";
import { ThemeProvider } from "@mui/material/styles";

import StepperForm from "./components/StepperForm";



export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StepperForm />} />
         
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
