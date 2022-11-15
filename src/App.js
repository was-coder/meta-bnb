import React, { useState } from "react";
import Navbar from "./components/Navbar";
import GetRoute from "./route/GetRoute";
import Footer from "./components/Footer";

function App() {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setPopup(!popup);
        }}
        className={popup ? "container expanded" : "container"}
      >
        <Navbar />
        <GetRoute />
        <Footer />
      </div>
    </>
  );
}

export default App;
