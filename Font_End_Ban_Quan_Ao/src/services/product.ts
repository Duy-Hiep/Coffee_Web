import { IProduct } from "../types/Product";
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

 const productApi = createApi({
    reducerPath: 'productApi',
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080'}),

    endpoints: (builder) => ({
        //actions
        getProduct: builder.query<any, void>({
            query: () => '/products',
            providesTags: ['Product']
        }),
        getProductById: builder.query<IProduct, number | string>({
            query: (id) => `/products/${id}`,
            providesTags: ['Product']
        }),
        removeProduct: builder.mutation<void, number | string>({
            query: (id) => ({
                url: `products/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['Product']
        }),
        addProduct: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/products`,
                method: "POST",
                body: product
            }),
            invalidatesTags: ['Product']
        }),
        updateProduct: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/products/${product._id}`,
                method: "PUT",
                body: product
            }),
            invalidatesTags: ['Product']
        })
    })
});

export const {
    useGetProductQuery,
    useGetProductByIdQuery,
    useAddProductMutation,
    useRemoveProductMutation,
    useUpdateProductMutation
} = productApi;
export const productReducer = productApi.reducer;
export default productApi;