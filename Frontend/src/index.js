import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import SignUp from "./components/signUp/index";
import Home from "./components/homepage/index";
import AddBook from "./components/addBook/index";
import Cart from "./components/cart/index";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/AddBook" element={<AddBook />}></Route>
      <Route path="/Cart" element={<Cart />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
    </Routes>
  </BrowserRouter>
);


