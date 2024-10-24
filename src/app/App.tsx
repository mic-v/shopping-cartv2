import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from "./routes";

const Items = () => {
    const [items, setItems] = useState(null);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/", { mode: "cors" })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error: Error) => {
            console.error(error)
        })
    }, []);

    return (
        items && (
            <>
                <h1 className="text-3xl text-gray-100">Items</h1>
                <div>{items}</div>
            </>
        )
    );
}

export default function App() {
    const router = createBrowserRouter(routes);
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}
