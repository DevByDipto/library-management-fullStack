import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const bookApi = createApi({
     reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
  }),
//    tagTypes: ['book'],
   endpoints: (build) => ({
       getBook: build.query({
        query: () => `/books`,
       })

   })

})

export const {useGetBookQuery} = bookApi