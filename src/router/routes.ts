import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import EditBook from "../pages/EditBook";
import CreateBook from "../pages/CreateBook";
import AllBook from "../pages/AllBook";
import BorrowSummary from "../pages/BorrowSummary";
import BookDetails from "../pages/BookDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
        {
            index:true,
            Component: Home
        },
        {
            path:'/books',
            Component: AllBook
        },
        {
            path:'/create-book',
            Component: CreateBook
        },
        {
            path:'/books/:id',
            Component: BookDetails
        },
        {
            path:'/borrow-summary',
            Component: BorrowSummary
        },
        {
            path:'/edit-book/:id',
            Component: EditBook
        },
        {
            path:'/create-book',
            Component: CreateBook
        }
    ]
  },
]);