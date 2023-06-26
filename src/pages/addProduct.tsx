import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  TextField,
  Button,
  Box,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Snackbar,
} from "@material-ui/core";

import FileUpload from "../components/FileUpload";

import { useState } from "react";

import { useDispatch } from "react-redux";
// import {useSelector } from "react-redux"
// import { RootState } from "../store";
import { createProduct } from "../store/ProductSlice";
import { FormWrapper } from "../Style/Form";
import CloseIcon from "@mui/icons-material/Close";

type FormValues = {
  productName: string;
  price: number;
  description: string;
};

const schema = yup.object().shape({
  productName: yup
    .string()
    .required("لطفا نام محصول را وارد کنید")
    .matches(/^[a-zA-Z\s]*$/, "فقط حروف الفبا و فاصله مجاز هستند"),
  price: yup
    .number()
    .required("قیمت باید از نوع «عدد» باشد، اما مقدار نهایی این بود: «NaN»."),
  description: yup
    .string()
    .required("لطفا توضیحات مربوط به محصول را وارد کنید ")
    .matches(/^[a-zA-Z\s]*$/, "فقط حروف الفبا و فاصله مجاز هستند"),
});

function AddProduct() {
  const [product, setProduct] = useState<FormValues>({
    productName: "",
    price: 0,
    description: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setProduct({
      ...product,
      productName: data.productName,
    });
    createProduct(product);
    console.log(data, "data");
  };

  return (
    <>
      <Container
        style={{
          marginTop: "10rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "15rem",
          padding: "0 15rem",
        }}
      >
        <FormWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <FormLabel htmlFor="name-input">نام محصول</FormLabel>
                  <TextField
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    {...register("productName")}
                    error={!!errors.productName}
                    helperText={errors.productName?.message}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <FormLabel htmlFor="price-input">قیمت محصول</FormLabel>
                  <TextField
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    type="number"
                    {...register("price")}
                    error={!!errors.price}
                    // helperText={errors.price?.message}
                  />
                  {!!errors.price && (
                    <p className="error-text">
                      قیمت باید از نوع «عدد» باشد، اما مقدار نهایی این بود:
                      «NaN».
                    </p>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <FormLabel htmlFor="name-input">عکس محصول</FormLabel>

                  <FileUpload limit={1} multiple={false} name="image" />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <FormLabel htmlFor="description-input">توضیحات</FormLabel>
                  <TextField
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    {...register("description")}
                    error={!!errors.description}
                    helperText={errors.description?.message}
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
        </FormWrapper>
      </Container>
    </>
  );
}
export default AddProduct;
function dispatch(newLocal: (dispatch: any) => Promise<void>) {
  throw new Error("Function not implemented.");
}
