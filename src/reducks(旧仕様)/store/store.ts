import { createStore as reduxCreateStore, combineReducers} from 'redux';
import {UsersReducer} from '../users/reducers'
// import {ProductReducer} from '../products/reducers'

export default function createStore() {
    return reduxCreateStore(
        combineReducers({
            users:UsersReducer,
            // product: ProductReducer,
        })
    )
}