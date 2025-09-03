import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
  }),
  tagTypes: ['Book'],
  endpoints: (build) => ({
    getBook: build.query({
      query: () => `/books`,
      providesTags: ['Book'],
    }),
    getBookById: build.query({
      query: (id) => `/books/${id}`,
      // একটি নির্দিষ্ট বইয়ের জন্য ট্যাগ, যা আইডির উপর নির্ভরশীল।
      providesTags: (result, error, id) => [{ type: 'Book', id }], // result, error kii ? kothatheke asche ? id kotha theke asche ?
    }),
    updateBook: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `books/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      // এখন এটি দুটি ট্যাগই বাতিল করবে: নির্দিষ্ট বই এবং সম্পূর্ণ তালিকা।
      invalidatesTags: (result, error, { id }) => [ // {id} aivabe likhlam keno ?
        { type: 'Book', id },
        'Book',
      ],
    })
  })
});

export const { useGetBookQuery, useGetBookByIdQuery, useUpdateBookMutation } = bookApi;
