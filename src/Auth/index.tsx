import theme from "../styles/theme";
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Input from "./Input";

export interface UserInfo {
  id: string;
  password: string;
}
const Auth = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({ id: "", password: "" });

  const handleSubmitDisabled = () => {
    let idCheck = userInfo.id.includes("@" || ".");
    let pwCheck = 8 <= userInfo.password.length;
    let valid = !!pwCheck && !!idCheck;
    return !valid;
  };

  return (
    <Layout>
      <Form>
        <Input setUserInfo={setUserInfo} type="id">
          아이디
        </Input>
        <Input setUserInfo={setUserInfo} type="password">
          비밀번호
        </Input>
        <BtnWrapper>
          <Btn disabled={handleSubmitDisabled()}>회원가입</Btn>
          <Btn disabled={handleSubmitDisabled()}>로그인</Btn>
        </BtnWrapper>
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

const BtnWrapper = styled.div`
  display: flex;
`;

const Btn = styled.button`
  border-radius: 10px;
  margin: 10px 5px;
  padding: 5px 10px;
  font-size: 16px;
  color: white;
  background-color: ${({ disabled }) =>
    disabled ? `${theme.color.middle_gray}` : `${theme.color.main_point}`};
`;
