import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/api`,
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
      providesTags: (id) => [{ type: 'Book', id }], // result, error kii ? kothatheke asche ? id kotha theke asche ?
    }),
    createBook: build.mutation({
      query: (body) => ({
        url: `books`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Book']
    }),
    updateBook: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `books/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: ({ id }) => [ // {id} aivabe likhlam keno shorashori id nah likhe ?
        { type: 'Book', id },
        'Book',
      ],
    }),
    deleteBook: build.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Book']
    }),

  })
});

export const { useGetBookQuery, useGetBookByIdQuery, useUpdateBookMutation, useDeleteBookMutation,useCreateBookMutation } = bookApi;
