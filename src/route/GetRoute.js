import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import PlaceToStay from "../components/PlaceToStay";

function GetRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/places" element={<PlaceToStay />} />
    </Routes>
  );
}

export default GetRoute;
