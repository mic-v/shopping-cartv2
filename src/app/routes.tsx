import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";


const routes = [
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "shop",
        element: <ShopPage/>,
    },
];

export default routes;
