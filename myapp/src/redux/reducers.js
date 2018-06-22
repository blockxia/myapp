import {ADD_COMMENT,DELETE_COMMENT} from './action-types'

const initComments=[
    {username: 'damu', content: 'react不会!'},
    {username: 'sadamu', content: 'react真不会!'},
]
export function comments(state=initComments,action) {
    switch (action.type){
        case ADD_COMMENT:
            const comment=action.data
            return [comment,...state]
        case DELETE_COMMENT:
            const index=action.data
            return state.filter((comment,i)=>i!==index)
        default:
            return state
    }
}