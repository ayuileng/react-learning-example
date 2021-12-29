import React, { Component } from "react";
import News from "./News";
import Message from "./Message";
import { NavLink, Route } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-nav">
          <NavLink to="/home/news">News</NavLink>&nbsp; &nbsp;
          <NavLink to="/home/message">Messages</NavLink>
        </div>
        <div>
          <Route path="/home/news" component={News} />
          <Route path="/home/message" component={Message} />
        </div>
      </div>
    );
  }
}
