import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <div className="row">
        <NavLink activeClassName="highlight" to="/about">
          点击这里打开About
        </NavLink>
        &nbsp; &nbsp;
        <NavLink activeClassName="highlight" to="/home">
          点击这里打开Home
        </NavLink>
      </div>
      <div className="content">
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
      </div>
    </div>
  );
}
