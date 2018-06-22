import {INCREMENT,DECREMENT}from './action-types'
export function count(state=0,action) {
    console.log('count()',state,action);
    switch (action.type){
        case INCREMENT:
            return state+action.number
        case DECREMENT:
            return state-action.number
        default:
            return state
    }
}