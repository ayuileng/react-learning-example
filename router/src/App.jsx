import React, { Component } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
export default class App extends Component {
    // 注意 这是新版的写法，老版的写法是<Route path="/about" component={About} />
    // 且不需要别Routes标签包裹
    // NavLink标签的用法也有变化，没有activeClassName属性了，要用新的写法
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <NavLink className={({ isActive }) => 'list-group-item ' + (isActive ? 'highlight' : '')} to="/about">About</NavLink>
                            <NavLink className={({ isActive }) => 'list-group-item ' + (isActive ? 'highlight' : '')} to="/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Routes>
                                    <Route exact={true} path="/about" element={<About />} />
                                    <Route path="/home" element={<Home />} />
                                </Routes>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
