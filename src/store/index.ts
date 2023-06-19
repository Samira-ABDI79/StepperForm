import { configureStore } from '@reduxjs/toolkit'
import FormSlice from './FormSlice'

export const store = configureStore({
  reducer: {
    User: FormSlice,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch