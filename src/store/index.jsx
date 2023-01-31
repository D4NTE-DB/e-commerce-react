import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/products.slice'
import  userNameSlice  from './slices/userName.slice'

export default configureStore({
    reducer: {
        userName: userNameSlice,
        products: productsSlice
    }
})
