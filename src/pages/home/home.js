import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Table} from 'antd'
import axios from 'axios'
import './home.scss'
export default function Home() {
    const [dataSource,setDataSource] = useState([])  
    const [index,setIndex] = useState(0)
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ];
    useEffect(()=>{
      if(index === 0){
          axios.get('./data.json').then((res)=>{
              if(res.data.code === 0) {
                  setDataSource(res.data.data)
              }
          })
      } else{
          setDataSource([])
      }
    },[index]) // 组件加载或者数据发生改变的时候
    return <div className="home">
        <h1>soupjian调查报告</h1>
        <div className="wrap">
            <ul className="nav">
                <li className={index === 0 ? "checked": ""} onClick={()=>{setIndex(0)}}>数据语言动态</li>
                <li className={index === 1 ? "checked": ""} onClick={()=>{setIndex(1)}}>语言地图</li>
                <li className={index === 2 ? "checked": ""} onClick={()=>{setIndex(2)}}>语言热搜</li>
                <li className={index === 3 ? "checked": ""} onClick={()=>{setIndex(3)}}>语言播报</li>
            </ul>
            <p>数据纯属虚构</p>
            <Table bordered pagination={false} dataSource={dataSource} columns={columns} />
            <Link to="/" className="nav_link">回首页</Link>
        </div>
    </div>
}