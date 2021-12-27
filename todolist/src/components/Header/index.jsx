import React, { Component } from 'react'

export default class Header extends Component {
    handleKeyUp  = (ev)=>{
        const {keyCode,target} = ev;
        if(keyCode!==13){
            return ;
        }
        this.props.saveTodo(target.value);
        target.value = '';
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
