import Loading from "../components/Loading";
import { useGetborrowQuery } from "../redux/features/borrow/borrowApi";
import type { Borrow } from "../type";


const BorrowSummary = () => {
  const { data, isLoading } = useGetborrowQuery(undefined);
  if (isLoading) {
    return <Loading></Loading>;
  }

  const borrows = data?.data;
  if(!borrows)return
  // console.log(data);

  return (
    <div className="px-8 my-10">
      <div>
 {/* Add New Book Button */}
      <div className="flex justify-between mb-4">
      <h2 className="text-2xl font-bold">Borrow Summary</h2>
        
      </div>

      {/* Books Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 border">
          <thead className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">ISBN</th>
              <th className="py-2 px-4 text-left">Total Quantity Borrowed</th>
            </tr>
          </thead>
          <tbody>
            {borrows?.map(
              (
                borrow: Borrow // book use korate lav kii holo
              ) => (
                <tr key={borrow.book.isbn} className="border-b dark:border-gray-700">
                  <td className="py-2 px-4">{borrow.book.title}</td>
                  <td className="py-2 px-4">{borrow.book.isbn}</td>
                  <td className="py-2 px-4 text-center">{borrow.totalQuantity}</td>
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

export default BorrowSummary;
