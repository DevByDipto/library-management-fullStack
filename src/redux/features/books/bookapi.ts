import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const bookApi = createApi({
     reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
  }),
   tagTypes: ['book'],
   endpoints: (build) => ({
       getBook: build.query({
        query: () => ({ url: `/books` }),
       })

   })

})

export const {useGetBookQuery} = bookApi