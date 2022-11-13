import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";

function GetRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default GetRoute;
