import React, { Component } from 'react'

export default class Item extends Component {
    state = {
        mouse: false
    }
    handleMouse = (flag) => {
        this.setState({ mouse: flag })
    }
    changeState = (id, checked) => {
        this.props.updateTodo(id, checked);
    }
    render() {
        const { id, content, done } = this.props;
        return (
            <li onMouseEnter={() => this.handleMouse(true)}
                onMouseLeave={() => this.handleMouse(false)}
                style={{ backgroundColor: this.state.mouse ? '#ddd' : 'white' }}>
                <label>
                    <input type="checkbox" defaultChecked={done} onChange={(ev) => this.changeState(id, ev.target.checked)} />
                    <span>{content}</span>
                </label>
                <button className="btn btn-danger" style={{ display: this.state.mouse ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
