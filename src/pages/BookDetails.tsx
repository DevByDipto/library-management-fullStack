
import { useGetBookByIdQuery } from "../redux/features/books/bookApi";
import Loading from "../components/Loading";
import { useParams } from "react-router";



const BookDetails= () => {
const {id} = useParams()
    const {data,isLoading} = useGetBookByIdQuery(id)
    const book:Book = data?.data
    if (isLoading) {
        return <Loading></Loading>
    }

  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">{book.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="font-semibold text-gray-700 dark:text-gray-200">Author:</p>
          <p className="text-gray-900 dark:text-gray-100">{book.author}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700 dark:text-gray-200">Genre:</p>
          <p className="text-gray-900 dark:text-gray-100">{book.genre}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700 dark:text-gray-200">ISBN:</p>
          <p className="text-gray-900 dark:text-gray-100">{book.isbn}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700 dark:text-gray-200">Copies:</p>
          <p className="text-gray-900 dark:text-gray-100">{book.copies}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700 dark:text-gray-200">Availability:</p>
          <p className={`font-bold ${book.available ? "text-green-600" : "text-red-600"}`}>
            {book.available ? "Available" : "Unavailable"}
          </p>
        </div>
        <div>
          <p className="font-semibold text-gray-700 dark:text-gray-200">Created At:</p>
          <p className="text-gray-900 dark:text-gray-100">{new Date(book.createdAt).toLocaleDateString()}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700 dark:text-gray-200">Updated At:</p>
          <p className="text-gray-900 dark:text-gray-100">{new Date(book.updatedAt).toLocaleDateString()}</p>
        </div>
      </div>

      {book.description && (
        <div>
          <p className="font-semibold text-gray-700 dark:text-gray-200">Description:</p>
          <p className="text-gray-900 dark:text-gray-100">{book.description}</p>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
