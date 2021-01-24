import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { productListReducer, productDetailsReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

const cartItemsFromStorage = localStorage.getItem('catItems')
? JSON.parse(localStorage.getItem('cartItem')): []



const initialState = {
    cart: { cartItems: cartItemsFromStorage}
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store