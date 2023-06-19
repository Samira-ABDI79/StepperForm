import { configureStore } from '@reduxjs/toolkit'
import FormSlice from './FormSlice'

export const store = configureStore({
  reducer: {
    counter: FormSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch