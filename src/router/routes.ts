import { createBrowserRouter } from "react-router";
import App from '../App'
import mainLayout from "../layouts/mainLayout";
import Home from "../pages/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: mainLayout,
    children:[
        {
            index:true,
            Component: Home
        }
    ]
  },
]);