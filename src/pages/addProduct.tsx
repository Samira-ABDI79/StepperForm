import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  TextareaAutosize,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
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
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(createProduct(product));
  };

  return (
    <Container sx={{ mr: "20rem", mt: "15rem" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="name-input">Name</InputLabel>
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
              <InputLabel htmlFor="price-input">Price</InputLabel>
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
              <InputLabel htmlFor="description-input">Description</InputLabel>
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
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddProduct;
