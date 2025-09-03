import { createBrowserRouter } from "react-router";
import App from '../App'
import mainLayout from "../layouts/mainLayout";
import Home from "../pages/Home";
import EditBook from "../pages/EditBook";
import CreateBook from "../pages/CreateBook";
import AllBook from "../pages/AllBook";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: mainLayout,
    children:[
        {
            index:true,
            Component: Home
        },
        {
            path:'/all-book',
            Component: AllBook
        },
        {
            path:'/add-book',
            Component: CreateBook
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