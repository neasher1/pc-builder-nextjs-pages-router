import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `/api/products`,
        }),
        getProductsById: builder.query({
            query: (id) => ({ url: `/api/products/${id}` }),
        }),
        getAllCategories: builder.query({
            query: () => `/api/categories`,
        }),
    }),
})

export const { useGetAllProductsQuery, useGetProductsByIdQuery, useGetAllCategoriesQuery } = apiSlice;