import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./Theme/theme";
import { ThemeProvider } from "@mui/material/styles";

import StepperForm from "./components/StepperForm";
import MySelect from "./components/Select"


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StepperForm />} />
          {/* <Route path="/" element={<MySelect />} /> */}

         
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
