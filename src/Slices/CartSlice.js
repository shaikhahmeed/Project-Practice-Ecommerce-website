import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
  },
})

export const {addToCart } = CartSlice.actions

export default CartSlice.reducer