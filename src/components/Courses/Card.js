import React from 'react';
// import { useLoaderData } from 'react-router-dom';

const Card = ({boi}) => {
    // const books = useLoaderData();
    const { b_name, description, img } = boi;

    return (
        <div className="col-span-1">
            <div className="card w-96 bg-base-100 shadow-xl mb-2 mr-2">
                <figure className="px-10 pt-10">
                    <img src={img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{b_name}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;