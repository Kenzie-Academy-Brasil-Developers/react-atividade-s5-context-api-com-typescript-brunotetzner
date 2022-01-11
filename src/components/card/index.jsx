import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button } from "@mui/material";
import { useCart } from "../../providers/cart";

export const CardItem = () => {
  const { addProduct, product } = useCart();
  return product.map((products) => (
    <Card sx={{ maxWidth: 250, maxHeight: 450, margin: "1%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={products.image}
          alt={products.title}
        />
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {products.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            descrição {products.description}
          </Typography>
          <br />
          <Typography
            sx={{ color: "darkblue" }}
            variant="body2"
            color="text.primary"
          >
            preço:R${products.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => addProduct(products)}>comprar</Button>
      </CardActions>
    </Card>
  ));
};
