import React,{Component} from 'react'
import {Link,Route} from 'react-router-dom'


import MessageDetail from './message-detail'
export default class Message extends Component{
    state={
        messages:[]
    }
    componentDidMount(){
    //处理异步请求，例如定时器
        this.intervalId=setTimeout(()=>{
            const messages=[
                {id:1,title:"最新小说"},
                {id:5,title:"可爱动物"},
                {id:8,title:"旅游景点"},
            ]
            this.setState({
                messages
            })
        },1000)
    }
    componentWillUnmount(){
        clearTimeout(this.intervalId)
    }
    showDetail=(id)=>{
        this.props.history.push('/home/message/'+id)
    }
    showDetail2=(id)=>{
        this.props.history.replace('/home/message/'+id)
    }
    render(){
        return(
           <div>
               <ul>
                   {this.state.messages.map((m,index)=>(
                       <li key={index}>
                           <Link  to={`/home/message/${m.id}`} >{m.title}</Link>
                           <button onClick={()=>{this.showDetail(m.id)}}>push</button>
                            <button onClick={()=>{this.showDetail2(m.id)}}>replace</button>
                       </li>
                   ))}
               </ul>
               <p>
                   <button onClick={()=>this.props.history.goBack()}>回退</button>
                   <button onClick={()=>this.props.history.goForward()}>前进</button>

               </p>
               <Route path='/home/message/:id' component={MessageDetail}/>
           </div>
        )
    }
}