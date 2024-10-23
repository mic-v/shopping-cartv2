import { useState, useEffect } from 'react'
import './App.css'

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
                <h1>Items</h1>
                <div>{items}</div>
            </>
        )
    );
}

export default function App() {
    return (
        <>
        <h1 className="text-3xl font-bold underline">
            Hello World!
        </h1>
        <Items/>
        </>
    )
}
