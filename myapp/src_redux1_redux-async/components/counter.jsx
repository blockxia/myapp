import React, {Component} from 'react'
import PropTypes from 'prop-types'
/*
* ui组件
*count
* */
export default class Counter extends Component {
    static propTypes={
        count:PropTypes.number.isRequired,
        increment:PropTypes.func.isRequired,
        decrement:PropTypes.func.isRequired,
        incrementAsync:PropTypes.func.isRequired,
    }
    increment=()=>{
       const number =this.refs.numSelect.value*1
       this.props.increment(number)
    }
    decrement=()=>{
        const number=this.refs.numSelect.value*1
        this.props.decrement(number)
    }
    incrementIfOdd=()=>{
        const number=this.refs.numSelect.value*1
        const count =this.props.count//获取状态方法
        if(count%2===1){
            this.props.increment(number)//更新状态方法
        }

    }
    incrementAsync=()=>{

            const number=this.refs.numSelect.value*1
            this.props.incrementAsync(number)

    }
    render() {
        const count=this.props.count//获取状态
        return (
         <div>
             <p>click{count} times</p>
             <select  ref="numSelect">
                 <option >1</option>
                 <option >2</option>
                 <option >3</option>
             </select>
             <button onClick={this.increment}>+</button>
             <button onClick={this.decrement}>-</button>
             <button onClick={this.incrementIfOdd}>increment if odd</button>
             <button onClick={this.incrementAsync}>increment async</button>
         </div>
        )
    }
}