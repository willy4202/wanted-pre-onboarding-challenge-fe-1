import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Entry from "./Entry";
import Main from "./Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
