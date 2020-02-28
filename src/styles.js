import styled from "styled-components";

export const Sheet = styled.div`
  display: grid;
  grid-template-columns: 32px repeat(
      ${props => props.numberOfColumns - 1},
      90px
    );
`;

export const Header = styled.div`
  background: #ccc;
  color: #282828;
  padding: 4px;
  text-align: center;
`;

export const Input = styled.input`
  padding: 0 4px;
  :not(:focus) {
    text-align: right;
  }

  :focus {
    border: 1px solid #1581ba;
    background-color: #e7f2f8;
  }
`;
