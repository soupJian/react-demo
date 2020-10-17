import React from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import App from './pages/app/app'
import Login from './pages/login/login'
import Home from './pages/home/home'
import Detail from './pages/detail/detail'
import TodoList from './pages/todoList/todoList'
import Err from './pages/err/err'
export default function Irouter(){
    return <Router>
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/detail/id=:id" component={Detail}></Route>
            <Route exact path="/todo" component={TodoList}></Route>
            <Route path="*" component={Err}></Route>  {/* 其他路径匹配不到 就执行这个 */}
        </Switch>
    </Router>
}