import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Form,Input,Button} from 'antd'
import axios from 'axios'
import './login.scss'
const FormItem = Form.Item
export default function Login() {
    const [name,setName] = useState('')
    const [pwd,setPwd] = useState('')
    const history = useHistory()
    const pwdChange = (e)=> {
        setPwd(e.target.value)
    }
    return <Form className="form_login">
        <FormItem>
            <Input placeholder="请输入用户名" autoComplete="username" onChange={(e)=>{setName(e.target.value)}}/>
        </FormItem>
        <FormItem>
            <Input placeholder="请输入密码" type="password" autoComplete="current-password" onChange={(e)=>{pwdChange(e)}}/>
        </FormItem>
        <label>{name}---{pwd}</label>
        <FormItem>
            <Button type="primary" onClick={()=>{
                login(name,pwd).then(res=>{
                    if(res.data.code === 0){
                        history.push('/home')
                    }
                })
            }}>登录</Button>
        </FormItem>
    </Form>
}
function login(name,pwd){
    return axios.get('./login.json',{
        params: {
            name,pwd
        }
    })
}