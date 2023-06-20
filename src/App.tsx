import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./Theme/theme";
import { ThemeProvider } from "@mui/material/styles";

import StepperForm from "./pages/StepperForm";

import Layout from "./components/layout/layout";
import Home from "./pages/Home";
import MyForm from "../src/components/CustomInput"
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<StepperForm />} />
        <Route path="/xs" element={<MyForm />} />

        <Route element={<Layout />}>
        <Route path="/finish" element={<Home />} />

         </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
