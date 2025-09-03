import { createBrowserRouter } from "react-router";
import App from '../App'
import mainLayout from "../layouts/mainLayout";
import Home from "../pages/Home";
import EditBook from "../pages/EditBook";
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
            path:'/edit-book/:id',
            Component: EditBook
        }
    ]
  },
]);