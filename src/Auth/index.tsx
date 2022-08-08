import theme from "../styles/theme";
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Input from "./Input";

const Auth = () => {
  interface UserInfo {
    id: string;
    password: string;
  }

  const [userInfo, setUserInfo] = useState<UserInfo>({ id: "", password: "" });

  console.log(userInfo);

  return (
    <Layout>
      <Form>
        <Input setUserInfo={setUserInfo} type="id">
          아이디
        </Input>
        <Input setUserInfo={setUserInfo} type="password">
          비밀번호
        </Input>
        <Btn>로그인</Btn>
      </Form>
    </Layout>
  );
};

export default Auth;

const Layout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.color.background_pulple};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 50vh;
`;

const Btn = styled.button`
  border-radius: 10px;
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 16px;
  background-color: ${theme.color.main_point};
  color: white;
`;
