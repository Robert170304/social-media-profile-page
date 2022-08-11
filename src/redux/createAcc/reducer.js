import actions from './actions'
const initialState = {
    userData: {},
    profileImgURL:''
}

export default function appReducer(state = initialState, action) {
    switch(action.type) {
        case actions.SET_USER_DATA:
            return {...state, userData: action.userData}
        case actions.SET_PROFILE_IMG_URL:
            return {...state, profileImgURL: action.profileImgURL}    
        default :
            return state
    }
}