import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Books = () => {
    const allboi = useLoaderData();
     console.log(allboi);
    return (
        <div> <h1 className='text-2xl italic font-bold mt-2 mb-6'>Books</h1>
            {allboi.map(boi => <Card
                        key={boi.id}
                        boi={boi}
                    ></Card>)

                    } 
        </div>
    );
};

export default Books;