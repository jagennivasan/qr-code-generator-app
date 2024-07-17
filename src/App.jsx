import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./pages/HomeComponent/HomeComponent";
import Header from "./components/layout/Header";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path="/" element={<HomeComponent/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
