import React from 'react'
import {useParams,useHistory} from 'react-router-dom'

export default function Detail() {
    const history = useHistory()

    const params = useParams()
    return <div>
        <h1>这是详情页</h1>
        <h2>当前 详情 的 id 是{params.id}</h2>
        <button onClick={()=>{history.push('/')}}>跳转首页</button>
    </div>
}
// export default class Detail extends React.Component{
//     render(){
//         return <div>
//             <h1>这是详情页</h1>
//             <h2>当前 详情 的 id 是{this.props.match.params.id}</h2>
//         </div>
//     }
// }