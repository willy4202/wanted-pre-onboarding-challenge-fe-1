import theme from "../../styles/theme";
import React, { ReactElement } from "react";
import styled from "styled-components";

interface BtnProps {
  children: string;
  fn: () => void;
}

interface BtnParmas {
  (param: BtnProps): ReactElement;
}

const Btn: BtnParmas = ({ children, fn }) => {
  return <Button>{children}</Button>;
};

export default Btn;

const Button = styled.button`
  height: 30px;
  border-radius: 10px;
  margin: 10px 5px;
  padding: 5px 10px;
  font-size: 16px;
  background-color: ${theme.color.middle_gray};
  box-shadow: 1px 1px 1px 1px;
  :active {
    box-shadow: none;
  }
`;
