import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Input,Button } from 'antd';
import 'antd/dist/antd.css';
import './todoList.scss';

class App extends Component {
  state = {
    val: '',
    list: []
  }
  handleChange = (e) => {
    let val = e.target.value
    this.setState({
      val
    })
  }
  handleAdd = () => {
    let {val,list} = this.state
    list.push(val)
    val = ''
    this.setState({
      val,
      list
    })
  }
  render() {
    const {val,list} = this.state
    return (
      <div>
        <h1>这是一个todolist</h1>
        <Input type="text" value={val} style={{width: 300}} onChange={this.handleChange}/>
        <Button type="primary" onClick={this.handleAdd}>添加</Button>
        <ul>
          <li style={{listStyle: "none"}}>
            <Link to="/">回首页</Link>
          </li>
          {
            list.map((item,index)=>{
            return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
