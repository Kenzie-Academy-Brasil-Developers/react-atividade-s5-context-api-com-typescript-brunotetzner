import { HeaderStyled } from "./style";

export const Header = ({ text }) => {
  return (
    <HeaderStyled>
      <h1>{text}</h1>
    </HeaderStyled>
  );
};
