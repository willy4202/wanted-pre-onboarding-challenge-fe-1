import theme from "../../styles/theme";
import React, { useState } from "react";
import styled from "styled-components";
import Btn from "../Btn";

const Detail = () => {
  const [toDo, setTodo] = useState({ title: "", text: "" });

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setTodo((prev) => ({ ...prev, [e.target.name]: value }));
    console.log(toDo);
  }

  function addTodo() {
    return;
  }

  return (
    <section>
      <Wrapper>
        <Input name="title" onChange={(e) => inputHandler(e)} />
        <Input name="text" onChange={(e) => inputHandler(e)} />
      </Wrapper>
      <Btn fn={addTodo}>추가</Btn>
      <Btn fn={addTodo}>수정</Btn>
      <Btn fn={addTodo}>삭제</Btn>
    </section>
  );
};

export default Detail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 70vh;
  background-color: white;
  border: 1px solid ${theme.color.main_point};
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  margin-top: 30px;
`;
