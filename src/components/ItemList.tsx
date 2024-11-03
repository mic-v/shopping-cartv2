import React from 'react'
import { useState, useEffect } from 'react';

export default function ItemList() {
    const [items, getitems] = useState(null);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/categories", { mode: "cors" })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
            })
            .catch((error: Error) => {
                console.log(error);
                return error;
            });
    }, []);

    return (
        <>
            <h1>ItemList</h1>
            <div>{items}</div>
        </>
    );
}
