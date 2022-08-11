import { combineReducers } from "redux";
import LogedIn from './islogedIn/reducer'
import UserData from './createAcc/reducer'

const reducers = combineReducers({LogedIn, UserData})

export default reducers

