import {ISlider} from "../types/Slider";
import {  createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const sliderApi = createApi({
    reducerPath: "sliderApi",
    tagTypes: ['Slider'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080'}),

    endpoints: (builder) => ({
        getSlider: builder.query<any, void>({
            query: () => '/slider',
            // providesTags: ['Slider']
        }),
        getSliderById: builder.query<ISlider, number | string>({
            query: (id) => `/slider/${id}`,
            providesTags: ['Slider']
        }),
        removeSlider: builder.mutation<void, number | string>({
            query: (id) => ({
                url: `/slider/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Slider"]
        }),
        addSlider: builder.mutation<ISlider, ISlider>({
            query: (slider) => ({
                url: `/slider`,
                method: "POST",
                body: slider
            }),
            invalidatesTags: ["Slider"]
        }),
        updateSlider: builder.mutation<ISlider, ISlider>({
            query: (slider) => ({
                url: `/slider/${slider._id}`,
                method: "PUT"
            }),
            invalidatesTags: ["Slider"]
        })
    })
});

export const {
    useGetSliderQuery,
    useAddSliderMutation,
    useGetSliderByIdQuery,
    useRemoveSliderMutation,
    useUpdateSliderMutation
} = sliderApi;
export const sliderReducer = sliderApi.reducer
export default sliderApi