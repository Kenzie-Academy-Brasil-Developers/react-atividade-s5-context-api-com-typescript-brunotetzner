import { Container } from "./style";
import { Button } from "@mui/material";
import { useCart } from "../../providers/cart";
export const CardItem = () => {
  const { addProduct, product } = useCart();
  return product.map((products) => (
    <Container key={product}>
      <div id="info">
        <h4>{products.title}</h4>
        <p>{products.description}</p>
        <label>Preço: R${products.price}</label>
        <Button onClick={() => addProduct(products)}>Comprar</Button>
      </div>
      <div id="img">
        <img src={products.image} />
      </div>
    </Container>
  ));
};
