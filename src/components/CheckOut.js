import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const data = useLoaderData();
    return (
        <div>
            <h1>Book Name</h1>
            <h1>{data.b_name}</h1>
        </div>
    );
};

export default CheckOut;