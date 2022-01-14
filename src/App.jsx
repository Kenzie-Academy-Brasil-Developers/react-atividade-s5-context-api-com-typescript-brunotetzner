import React from "react";
import { CardItem } from "./components/card";
import { CardCart } from "./components/cardCart";
import { Header } from "./components/header";
import { AllProductsDiv } from "./styledApp";

function App() {
  return (
    <>
      <Header text={"smartStore"} />
      <AllProductsDiv>
        <div id="products">
          <CardItem />
        </div>
        <div id="cart">
          <Header text="Carrinho" />
          <div id="card-Products">
            <CardCart />
          </div>
        </div>
      </AllProductsDiv>
    </>
  );
}

export default App;
