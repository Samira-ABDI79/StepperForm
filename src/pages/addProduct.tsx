import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Container,
  FormControl,
  Grid,
  FormLabel,
  IconButton,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
// import {useSelector } from "react-redux"
// import { RootState } from "../store";
import { createProduct } from "../store/ProductSlice";
import { FormWrapper } from "../Style/Form";
import CloseIcon from "@mui/icons-material/Close";
import FileUpload from "../components/FileUpload";
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

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
        sx={{ marginRight: "8rem" }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      <Container
        sx={{
          mt: "10rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormWrapper>
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
                <FormControl fullWidth variant="outlined">
                  <FormLabel sx={{ mb: "0.5rem" }} htmlFor="name-input">
                    عکس محصول
                  </FormLabel>

                  <FileUpload limit={1} multiple={false} name="image" />
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
                <Button type="submit" variant="contained" onClick={handleClick}>
                  ثبت
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormWrapper>
      </Container>
      <Snackbar
        sx={{ backgroundColor: "green" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="محصول با موفقیت اضافه شد"
        action={action}
      />
    </>
  );
};

export default AddProduct;
