import styled from "styled-components";

export const Container = styled.section`
  max-width: 260px;
  display: flex;
  flex-direction: row;
  align-items: space-evenly;
  justify-content: center;
  margin: 1%;
  box-shadow: 5px 5px 10px 1px #000000;
  font-family: sans-serif;
  margin-left: 3%;
  padding: 2%;
  border-radius: 10px;
  background-color: #f5f5f5;

  img {
    height: 180px;
  }
  @media (max-width: 621px) {
    min-width: 90%;
  }
  @media (min-width: 900px) {
    width: 100%;
    margin-bottom: 1.5%;
    margin-top: 1.5%;
  }
`;
