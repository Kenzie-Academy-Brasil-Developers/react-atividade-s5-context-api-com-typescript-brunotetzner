import { useCart } from "../../providers/cart";
import { Button } from "@mui/material";
import { Container } from "./style";
export const CardCart = () => {
  const { deleteProduct, cart } = useCart();
  return cart.length === 0 ? (
    <h1>Carrinho vazio</h1>
  ) : (
    cart.map((product) => (
      <Container key={product}>
        <div id="info">
          <h4>{product.title}</h4>
          <label>Preço: R${product.price}</label>
          <Button onClick={() => deleteProduct(product)}>remove</Button>
        </div>
        <div id="img">
          <img src={product.image} />
        </div>
      </Container>
    ))
  );
};
