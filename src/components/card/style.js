import styled from "styled-components";

export const Container = styled.section`
  max-width: 260px;
  display: flex;
  flex-direction: row;
  margin: 1%;
  box-shadow: 5px 5px 10px 1px #000000;
  font-family: sans-serif;

  padding: 2%;
  border-radius: 10px;
  background-color: #f5f5f5;

  img {
    height: 180px;
  }
  @media (max-width: 621px) {
    min-width: 90%;
  }
`;
