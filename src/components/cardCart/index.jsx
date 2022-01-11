import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useCart } from "../../providers/cart";
import { Button } from "@mui/material";

export const CardCart = () => {
  const { deleteProduct, cart } = useCart();
  return cart.length === 0 ? (
    <h1>Carrinho vazio</h1>
  ) : (
    cart.map((product) => (
      <Card
        sx={{
          display: "flex",
          maxHeight: "200px",
          maxWidth: "35%",
          marginBottom: 10,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {product.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              R${product.price}
            </Typography>
            <Button onClick={() => deleteProduct(product)}>remove</Button>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={product.image}
          alt="Live from space album cover"
        />
      </Card>
    ))
  );
};
