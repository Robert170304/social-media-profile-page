import actions from './action'

const initialState = {
    isLogedIn: false
}

export default function appReducer(state = initialState, action) {
    switch(action.type) {
        case actions.SET_IS_LOGEDIN:
            return {...state, isLogedIn: action.isLogedIn}
        default :
            return state
    }
}