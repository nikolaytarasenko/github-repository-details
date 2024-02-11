import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import reposReducer from '../features/reposSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        repos: reposReducer
    }
})