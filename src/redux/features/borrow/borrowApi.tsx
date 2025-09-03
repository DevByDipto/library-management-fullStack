
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
  }),
  tagTypes: ['borrow'],
  endpoints: (build) => ({
    getborrow: build.query({
      query: () => `/borrow`,
      providesTags: ['borrow'],
    }),
    createborrow: build.mutation({
      query: (body) => ({
        url: `borrow`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['borrow']
    }),
})});


   


export const { useGetborrowQuery,useCreateborrowMutation } = borrowApi;
