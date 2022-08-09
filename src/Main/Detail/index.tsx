import theme from "../../styles/theme";
import React, { useState } from "react";
import styled from "styled-components";

const SERVER = "http://localhost:8080";

const Detail = () => {
  const [toDo, setTodo] = useState({ title: "", content: "" });
  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setTodo((prev) => ({ ...prev, [e.target.name]: value }));
  }

  const addTodo = async () => {
    try {
      console.log(toDo);
      const token = localStorage.getItem("token");
      const res = await fetch(`${SERVER}/todos`, {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: toDo.title,
          content: toDo.content,
        }),
      });
      const result = await res.json();
      console.log(result);
    } catch (err) {
      alert(err);
    }
  };

  const deleteToDo = async () => {};

  return (
    <section>
      <Wrapper>
        <Input name="title" onChange={(e) => inputHandler(e)} />
        <Input name="content" onChange={(e) => inputHandler(e)} />
      </Wrapper>
      <Button onClick={addTodo}>추가</Button>
      <Button onClick={addTodo}>수정</Button>
      <Button onClick={addTodo}>삭제</Button>
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
