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
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 1%;
    justify-content: space-evenly;
  }
  div#card-Products {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 900px) {
    display: flex;
    flex-wrap: wrap;

    div#products {
      width: 50%;
    }

    div#cart {
      width: 30%;
      border: 3px solid gray;
      border-radius: 10px;
    }
    div#card-Products {
      width: 100%;
    }
  }
`;
