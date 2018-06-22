import React, {Component} from 'react'
export default class App extends Component {
    state={
        count:0
    }
    increament=()=>{
       const number =this.refs.numSelect.value*1
        const count=this.state.count+number
        this.setState({
            count
        })
    }
    decreament=()=>{
        const number=this.refs.numSelect.value*1
        const count=this.state.count-number
        this.setState({
            count
        })
    }
    increamentIfOdd=()=>{
        const number=this.refs.numSelect.value*1
        if(this.state.count%2===1){
            const count=this.state.count+number
            this.setState({
                count
            })
        }

    }
    decreamentAsync=()=>{
        setTimeout(()=>{
            const number=this.refs.numSelect.value*1
            const count=this.state.count+number
            this.setState({
                count
            })
        },1000)
    }
    render() {
        const {count}=this.state
        return (
         <div>
             <p>click{count} times</p>
             <select  ref="numSelect">
                 <option >1</option>
                 <option >2</option>
                 <option >3</option>
             </select>
             <button onClick={this.increament}>+</button>
             <button onClick={this.decreament}>-</button>
             <button onClick={this.increamentIfOdd}>increament if odd</button>
             <button onClick={this.decreamentAsync}>increament async</button>
         </div>
        )
    }
}