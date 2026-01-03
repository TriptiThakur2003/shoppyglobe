import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Future routes will go here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
