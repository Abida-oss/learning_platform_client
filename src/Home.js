import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://static01.nyt.com/images/2022/01/16/fashion/VIRAL-LIBRARY/VIRAL-LIBRARY-jumbo.jpg?quality=75&auto=webp")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 home text-5xl font-bold">Welcome</h1>
                        <p className="home mb-5 font-bold">“Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.”― John Green</p>
                        <button className="btn btn-primary">Welcome Our Site</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;