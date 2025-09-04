import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["Book"],
  endpoints: (build) => ({
    getBook: build.query({
      query: () => `/book`,
      providesTags: ["Book"],
    }),
    getBookById: build.query({
      query: (id) => `/books/${id}`,
      providesTags: (result, error, id) => [{ type: "Book", id }],
    }),
    updateBook: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `books/${id}`,
        method: "PATCH",
        body: patch,
        invalidatesTags: (result, error, { id }) => [
          { type: "Book", id },
          "Book",
        ],
      
      }),
    }),
  }),
});

export const { useGetBookQuery, useGetBookByIdQuery, useUpdateBookMutation } =
  bookApi;
