import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./pages/HomeComponent/HomeComponent";
import Header from "./components/layout/Header";
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
