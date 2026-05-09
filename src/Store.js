import { configureStore } from '@reduxjs/toolkit'
import   counterSlice  from './Slices/counterSlice'

export default configureStore({
  reducer: {
    shaikh : counterSlice,
  },
})