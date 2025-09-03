import React from "react";
import { useGetBookQuery } from "../redux/features/books/bookapi";
import Loading from "../components/Loading";
import { Button } from "../components/ui/button";
import type { Book } from "../type";

const AllBook = () => {
  const { data, isLoading } = useGetBookQuery(undefined);

  if (isLoading) {
    return <Loading></Loading>;
  }

  const books = data.data;
  console.log(data);

  return (
    <div className="p-6">
      {/* Add New Book Button */}
      <div className="flex justify-end mb-4">
        <Button variant="default">Add New Book</Button>
      </div>

      {/* Books Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 border">
          <thead className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Author</th>
              <th className="py-2 px-4 text-left">Genre</th>
              <th className="py-2 px-4 text-left">ISBN</th>
              <th className="py-2 px-4 text-center">Copies</th>
              <th className="py-2 px-4 text-center">Availability</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book:Book) => ( // book use korate lav kii holo
              <tr key={book._id} className="border-b dark:border-gray-700">
                <td className="py-2 px-4">{book.title}</td>
                <td className="py-2 px-4">{book.author}</td>
                <td className="py-2 px-4">{book.genre}</td>
                <td className="py-2 px-4">{book.isbn}</td>
                <td className="py-2 px-4 text-center">{book.copies}</td>
                <td className="py-2 px-4 text-center">
                  {book.available ? "Available" : "Unavailable"}
                </td>
                <td className="py-2 px-4 text-center space-x-2">
                  <Button size="sm" variant="outline">
                    Edit Book
                  </Button>
                  <Button size="sm" variant="destructive">
                    Delete Book
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={!book.available}
                  >
                    Borrow Book
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBook;
