import { createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage";
import ShopPage from "./routes/ShopPage";


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
