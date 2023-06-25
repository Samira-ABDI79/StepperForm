import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, FormControl, Grid, FormLabel } from "@mui/material";
import { useDispatch } from "react-redux";
// import {useSelector } from "react-redux"
// import { RootState } from "../store";
import { createProduct } from "../store/ProductSlice";

interface Product {
  name: string;
  price: number;
  description: string;
}

const AddProduct: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    name: "",
    price: 0,
    description: "",
  });
  // const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newLocal = createProduct(product);
    dispatch(newLocal);
  };

  return (
    <>
      <div className="background">
        <Container
          sx={{
            mt: "5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <FormLabel sx={{ mb: "0.5rem" }} htmlFor="name-input">
                    نام محصول
                  </FormLabel>
                  <TextField
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <FormLabel sx={{ mb: "0.5rem" }} htmlFor="price-input">
                    قیمت محصول
                  </FormLabel>
                  <TextField
                    name="price"
                    type="number"
                    value={product.price}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <FormLabel sx={{ mb: "0.5rem" }} htmlFor="description-input">
                    توضیحات
                  </FormLabel>
                  <TextField
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    margin="normal"
                    multiline
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained">
                  ثبت
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    </>
  );
};

export default AddProduct;
