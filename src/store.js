import {createStore} from 'redux'
import reducers from './redux/combineReducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export {store, persistor}