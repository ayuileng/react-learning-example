import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';

export default class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                content: '吃饭',
                done: true
            },
            {
                id: 2,
                content: '睡觉',
                done: true
            },
            {
                id: 3,
                content: '打dota',
                done: false
            }
        ]
    }

    // 子组件怎么把数据传给父组件：现在父组件中定义一个回调函数，接收的入参就是子组件要传给父组件的数据。
    // 然后子组件中调用这个回调函数，这个回调函数是在props中的，在调用这个函数时，传入目标数据即可
    saveTodo = (todoContent) => {
        if (todoContent.trim() === '') {
            return;
        }
        const { todos } = this.state;
        let currentIndex = this.state.todos.length;
        this.setState({
            todos: [{ id: currentIndex + 1, content: todoContent, done: false }, ...todos]
        })
    }
    updateTodo = (id, currentState) => {
        const newTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, done: currentState };
            }
            return todo;
        })
        this.setState({
            todos: newTodos
        })
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header saveTodo={this.saveTodo} />
                    <List todos={this.state.todos} updateTodo={this.updateTodo} />
                    <Footer />
                </div>
            </div>
        )
    }
}
