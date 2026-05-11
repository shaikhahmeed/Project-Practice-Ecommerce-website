import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './Slices/userSlice'
import  CartSlice  from './Slices/CartSlice'

export default configureStore({
  reducer: {
    user : userSlice,
    cart: CartSlice,
  },
})