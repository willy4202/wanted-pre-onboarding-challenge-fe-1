import theme from "../../styles/theme";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SERVER = "http://localhost:8080";

const List = () => {
  const [toDoData, setToDoDAta] = useState([]);

  useEffect(() => {
    fetch(`${SERVER}/todos`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setToDoDAta(data.data));
  }, []);

  const handleList = (item) => {
    console.log(item);
  };

  return (
    <Layout>
      <ul>
        <>
          {toDoData.map((item) => (
            <li key={item.id}>
              <button onClick={() => handleList(item.content)}>
                {item.title}
              </button>
            </li>
          ))}
        </>
      </ul>
    </Layout>
  );
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
