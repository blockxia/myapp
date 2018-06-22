import React, {Component} from 'react'
import PropTypes from 'prop-types'


import * as actions from '../redux/actions'
export default class App extends Component {
    static propTypes={
        store:PropTypes.object.isRequired
    }
    increment=()=>{
       const number =this.refs.numSelect.value*1
       this.props.store.dispatch(actions.increment(number))
    }
    decrement=()=>{
        const number=this.refs.numSelect.value*1
        this.props.store.dispatch(actions.decrement(number))
    }
    incrementIfOdd=()=>{
        const number=this.refs.numSelect.value*1
        const count =this.props.store.getState()//获取状态方法
        if(count%2===1){
            this.props.store.dispatch(actions.increment(number))//更新状态方法
        }

    }
    decrementAsync=()=>{
        setTimeout(()=>{
            const number=this.refs.numSelect.value*1
            this.props.store.dispatch(actions.increment(number))
        },1000)
    }
    render() {
        const count=this.props.store.getState()//获取状态
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
             <button onClick={this.decrementAsync}>increment async</button>
         </div>
        )
    }
}