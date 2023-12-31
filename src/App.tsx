import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./Theme/theme";
import { ThemeProvider } from "@mui/material/styles";

import StepperForm from "./pages/StepperForm";
import AddProduct from "./pages/addProduct";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import Validation from "./components/validation";
import ProductList from "./pages/viewProduct";
import ProductForm from "./pages/ProductForm";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StepperForm />} />
          <Route path="/Validation" element={<Validation />} />
          <Route path="/product" element={<ProductForm />} />

          <Route element={<Layout />}>
            <Route path="/finish" element={<Home />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/view-product" element={<ProductList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
