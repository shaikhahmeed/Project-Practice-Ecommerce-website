import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.user = action.payload
    },
  },
})

export const {incrementByAmount } = userSlice.actions

export default userSlice.reducer