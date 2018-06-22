import React,{Component} from 'react'
export default class News extends Component{
    state={
        newArr:['🐱 ','🐶','🐰']
    }
    render(){
        return(
            <ul>
                {this.state.newArr.map((item,index)=><li key={index}>{item}</li>)}
            </ul>
        )
    }
}