/*容器组件：通过connect函数产生的组件，内部包含了UI组件*/
import {connect}from 'react-redux'
import Counter from '../components/counter'
import {increment,decrement} from '../redux/actions'

function mapStateToProps(state) {
    return {count:state}
}
/*function mapDispatchToProps(dispatch) {
    return{
        increment(number){
            dispatch(increment(number))
        },
        decrement(number){
            dispatch(decrement((number)))
        }
    }
}*/
const mapDispatchToProps={
    increment,
    decrement
}


export default connect(
   mapStateToProps,
    mapDispatchToProps
)(Counter)
