import {configureStore} from '@reduxjs/toolkit'
import bankReducer from "./bankReducer"
import counterReducer from './counterSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		bank: bankReducer
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
