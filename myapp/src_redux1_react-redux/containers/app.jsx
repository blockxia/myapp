/*容器组件：通过connect函数产生的组件，内部包含了UI组件*/
import {connect}from 'react-redux'
import Counter from '../components/counter'
import {increment,decrement} from '../redux/actions'
export default connect(
    state=>({count:state}),
    {increment,decrement}

)(Counter)
