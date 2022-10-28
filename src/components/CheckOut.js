import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const data = useLoaderData();
    return (
        <div className='li'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz88MtZn0Kb9nh4sz7HBnGId5t3FdfkrwzAw&usqp=CAU")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Book Name</h1>
                        <p className="mb-5 text-2xl">{data.b_name}</p>
                        <h1 className="mb-5 text-5xl font-bold">Author</h1>
                        <p className="mb-5 text-2xl">{data.author}</p>
                    </div>
                </div>
            </div>
        </div>
        // <div className='li'>
        //     <h1>Book Name</h1>
        //     <h1>{data.b_name}</h1>
        // </div>
    );
};

export default CheckOut;