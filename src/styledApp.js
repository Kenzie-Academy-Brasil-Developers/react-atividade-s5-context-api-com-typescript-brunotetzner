import styled from "styled-components";

export const AllProductsDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  div#products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 95%;
  }
  div#cart {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 1%;
    justify-content: space-evenly;
  }
`;
