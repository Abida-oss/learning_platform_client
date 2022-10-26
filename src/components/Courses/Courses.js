import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';
// import Books from './Books';
import LeftNav from './LeftNav';

const Courses = () => {
    const allboi = useLoaderData();
    // console.log(allboi);
    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    <LeftNav></LeftNav>
                </div>
                <div className="col-span-2">
                    <h1>
                        Books
                    </h1>
                    {allboi.map(boi => <Card className="col-span-1"
                        key={boi.id}
                        boi={boi}
                    ></Card>)

                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;