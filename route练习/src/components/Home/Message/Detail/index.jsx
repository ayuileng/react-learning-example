import React, { Component } from "react";

export default class Detail extends Component {
  state = {
    msgs: [
      { id: "1", content: "content1", title: "title1" },
      { id: "2", content: "content2", title: "title2" },
      { id: "3", content: "content3", title: "title3" }
    ]
  };
  render() {
    const { id } = this.props.match.params;
    const msg = this.state.msgs.find((msg) => msg.id === id);
    return <div>{`消息标题是：${msg.title}，消息内容是：${msg.content}`}</div>;
  }
}
