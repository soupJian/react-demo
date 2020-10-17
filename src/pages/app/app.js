import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'antd'
import 'antd/dist/antd.css'
import './app.scss'
import { useState } from 'react'

export default function App() {
    const [count,setCount ] = useState(10)
    useEffect(()=>{
        console.log("执行了useEffect")
    },[])   // 传入空数组那么只会加载一次 
    return <div className="container">
            <h1>欢迎来到soupJian专场react</h1>
            <Link to="/home">首页</Link>
            <br/>
            <Link to="/login">登录</Link>
            <br/>
            <Link to="/todo">todoList</Link>
            <br/>
            <p>
                赞： {count}
            </p>
            <Button onClick={()=>{setCount(count+1)}}>点赞吧</Button>
        </div>
}
// 有i状态的组件
// export default class App extends React.Component{
//     handleClick = () => {
//         this.props.history.push('/login')
//     }
//     render(){
//         return <div className="container">
//             <h1>欢迎来到soupJian专场react</h1>
//             <Link to="/home">点击进入主页面</Link>
//             <br/>
//             <Link to="/login">点击进入登录页面</Link>
//             <br/>
//             <Button onClick={this.handleClick}>点击登录</Button>
//         </div>
//     }
// }