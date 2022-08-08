import React from "react";
import styled from "styled-components";

const Input = ({ setUserInfo, type, children }) => {
  function inputHandler(e: React.ChangeEvent<HTMLInputElement>, type: string) {
    const value = e.target.value;
    setUserInfo((prev) => ({ ...prev, [type]: value }));
  }

  return (
    <Wrapper>
      <Title>{children}</Title>
      <InputField
        type={type === "password" ? "password" : "text"}
        onChange={(event) => inputHandler(event, type)}
      />
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 5px;
`;

const Title = styled.h4`
  font-weight: 500;
  width: 20%;
`;

const InputField = styled.input`
  width: 50%;
`;
