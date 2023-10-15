import { configureStore } from '@reduxjs/toolkit'
import studentReducer from './Reducers/studentreducer'

export const store = configureStore({
  reducer: {
    studentReducer,
  },
})