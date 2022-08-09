import theme from "../../styles/theme";
import React from "react";
import styled from "styled-components";

const List = () => {
  return <Layout>List</Layout>;
};

export default List;

const Layout = styled.section`
  display: flex;
  justify-content: center;
  width: 30vw;
  height: 70vh;
  margin: 30px;
  background-color: white;
  border: 1px solid ${theme.color.main_point};
`;
