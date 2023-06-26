import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import { Container } from "@mui/material";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const useStyles = makeStyles((theme: any) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const ProductList: React.FC = () => {
  const classes = useStyles();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:3004/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <Container
      sx={{
        py: "10rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        marginRight: "15rem",
      }}
    >
      <Grid container spacing={4} justifyContent="end">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={2} lg={4}>
            <Card className={classes.card}>
              <img src={product.image} />

              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography>{product.description}</Typography>
              </CardContent>
              <Typography
                variant="h6"
                component="h3"
                align="center"
                sx={{ color: "red", fontWeight: "700" }}
              >
                {product.price} $
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
