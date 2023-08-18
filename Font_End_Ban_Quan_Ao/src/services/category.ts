import { ICategory } from "../types/Category";
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

 const categoryApi = createApi({
    reducerPath: 'categoryApi',
    tagTypes: ['Category'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080'}),

    endpoints: (builder) => ({
        //actions
        getCategory: builder.query<any, void>({
            query: () => '/categories',
            providesTags: ['Category']
        }),
        getCategoryById: builder.query<ICategory, number | string>({
            query: (id) => `/categories/${id}`,
            providesTags: ['Category']
        }),
        removeCategory: builder.mutation<void, number | string>({
            query: (id) => ({
                url: `categories/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['Category']
        }),
        addCategory: builder.mutation<ICategory, ICategory>({
            query: (categories) => ({
                url: `/categories`,
                method: "POST",
                body: categories
            }),
            invalidatesTags: ['Category']
        }),
        updateCategory: builder.mutation<ICategory, ICategory>({
            query: (categories) => ({
                url: `/categories/${categories._id}`,
                method: "PUT",
                body: categories
            }),
            invalidatesTags: ['Category']
        })
    })
});

export const {
    useGetCategoryQuery,
    useGetCategoryByIdQuery,
    useAddCategoryMutation,
    useRemoveCategoryMutation,
    useUpdateCategoryMutation
} = categoryApi;
export const categoryReducer = categoryApi.reducer;
export default categoryApi;