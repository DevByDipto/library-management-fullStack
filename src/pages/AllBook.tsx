import React from "react";
import {
  useCreateBookMutation,
  useDeleteBookMutation,
  useGetBookQuery,
} from "../redux/features/books/bookapi";
import Loading from "../components/Loading";
import { Button } from "../components/ui/button";
import type { Book } from "../type";
import { Link } from "react-router";
import Swal from "sweetalert2";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useState } from "react";
import { useCreateborrowMutation } from "../redux/features/borrow/borrowApi";
import toast from "react-hot-toast";

const AllBook = () => {
  const { data, isLoading,refetch,isError } = useGetBookQuery(undefined);
  const [deleteBook] = useDeleteBookMutation();
  const [quantity, setQuantity] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [createborrow] = useCreateborrowMutation();
if(isError){
  console.log(isError,data);
  
}

  const handleSubmit = async (id, e) => {
    e.preventDefault();
    const borrowData = {
      book: id,
      quantity: Number(quantity),
      dueDate,
    };
    try {
      const res = await createborrow(borrowData);
      console.log(res);
      if (res?.data?.success) {
        refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Book borrowed successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if(res?.error){
        toast.error(res.error.data.error)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error);
    }
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  const books = data.data;
  // console.log(data);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await deleteBook(id).unwrap(); // unwrap ki kaj kore ??
          console.log(res);
          if (res.success) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Book is successfully delete",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } catch (error) {
          console.error("Failed to delete book", error);
        }
      }
    });
  };
  return (
    <div className="px-8 my-10">
      <div>
 {/* Add New Book Button */}
      <div className="flex justify-between mb-4">
      <h2 className="text-2xl font-bold">All Books</h2>
        <Link to="create-book">
          <Button variant="default">Add New Book</Button>
        </Link>
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
            {books.map(
              (
                book: Book // book use korate lav kii holo
              ) => (
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
                    <Link to={`edit-book/${book._id}`}>
                      <Button size="sm" variant="outline">
                        Edit 
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(book._id)}
                    >
                      Delete 
                    </Button>
                    {/* borrow book */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          variant="outline"
                          disabled={!book.available}
                        >
                          Borrow 
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Borrow Details</DialogTitle>
                          <DialogDescription>
                            Please enter the quantity and due date.
                          </DialogDescription>
                        </DialogHeader>

                        <form
                          onSubmit={(e) => handleSubmit(book._id, e)}
                          className="space-y-4"
                        >
                          {/* Quantity Field */}
                          <div className="flex flex-col gap-2">
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input
                              id="quantity"
                              type="number"
                              placeholder="Enter quantity"
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                              required
                            />
                          </div>

                          {/* Due Date Field */}
                          <div className="flex flex-col gap-2">
                            <Label htmlFor="dueDate">Due Date</Label>
                            <Input
                              id="dueDate"
                              type="date"
                              value={dueDate}
                              onChange={(e) => setDueDate(e.target.value)}
                              required
                            />
                          </div>

                          <DialogFooter>
                            <DialogClose asChild>
                            <Button type="submit">Save</Button>
                            </DialogClose>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      </div>
     
    </div>
  );
};

export default AllBook;
