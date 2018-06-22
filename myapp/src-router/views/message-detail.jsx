import React,{Component} from 'react'
const messageDetails=[
    {id: 1, title: '最新小说', content: 'message content001'},
    {id: 5, title: '可爱动物', content: 'message content005'},
    {id: 8, title: '旅游景点', content: 'message content008'}
]
export default class MessageDetail extends Component{
    render(){
        const id=this.props.match.params.id*1
        const md=messageDetails.find((md,index)=>md.id===id)
        return(
            <ul>
                <li>ID:{id}</li>
                <li>Title:{md.title}</li>
                <li>Content:{md.content}</li>
            </ul>
        )
    }
}