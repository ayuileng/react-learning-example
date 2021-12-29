import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    ids: [1, 2, 3]
  };
  render() {
    const { ids } = this.state;
    return (
      <div>
        <ul>
          {ids.map((id) => {
            return (
              <li key={id}>
                <Link
                  to={`/home/message/${id}`}
                >{`点击跳转到消息${id}的详情`}</Link>
              </li>
            );
          })}
        </ul>
        <hr />
        <Route path="/home/message/:id" component={Detail} />
      </div>
    );
  }
}
