import theme from "../styles/theme";
import React from "react";
import styled from "styled-components";
import Detail from "./Detail";
import List from "./List";

const Main = () => {
  return (
    <Layout>
      <List />
      <Detail />
    </Layout>
  );
};

export default Main;

const Layout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.color.background_pulple};
`;
