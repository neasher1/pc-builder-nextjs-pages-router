import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/api'
import builderReducer from "./feature/builder/builderSlice";

export const store = configureStore({
    reducer: {
        builder: builderReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})