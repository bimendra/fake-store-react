import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'store',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com/'
    }),
    endpoints: (build) => ({
        getAllProducts: build.query<any[], void>({
            query: () => '/products'
        }),
        getProductsByCategory: build.query<any[], string>({
            query: (category: string) => `/products/${category}`
        })
    })
});

export const { useGetAllProductsQuery } = api;