import theme from "../styles/theme";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import Input from "./Input";
import { Router, useNavigate } from "react-router-dom";

export interface UserInfo {
  id: string;
  password: string;
}

const SERVER = "http://localhost:8080/";

const Auth = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({ id: "", password: "" });
  const navigate = useNavigate();

  const handleSubmitDisabled = () => {
    let idCheck = userInfo.id.includes("@");
    let pwCheck = 8 <= userInfo.password.length;
    let valid = !!pwCheck && !!idCheck;
    return !valid;
  };

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      alert("자동 로그인 ");
      navigate("/main");
    } else {
      return;
    }
  });

  const createUserData = async () => {
    try {
      const res = await fetch(`${SERVER}users/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userInfo.id,
          password: userInfo.password,
        }),
      });
      if (res.ok) {
        const result = await res.json();
        alert(result.message);
      } else {
        const result = await res.json();
        alert(result.details);
      }
    } catch (err) {
      alert(err);
    }
  };

  const loginUserData = async () => {
    try {
      const res = await fetch(`${SERVER}users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userInfo.id,
          password: userInfo.password,
        }),
      });
      console.log(res);
      if (res.ok) {
        const result = await res.json();
        localStorage.setItem("token", result.token);
        alert(result.message);
        navigate("/main");
      } else {
        const result = await res.json();
        alert(result.details);
      }
    } catch (err) {
      alert(err);
    }
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
          <Btn disabled={handleSubmitDisabled()} onClick={createUserData}>
            회원가입
          </Btn>
          <Btn disabled={handleSubmitDisabled()} onClick={loginUserData}>
            로그인
          </Btn>
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
