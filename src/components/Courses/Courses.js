import React from 'react';
import Books from './Books';
import LeftNav from './LeftNav';

const Courses = () => {

    return (
        <div>
            <div className="grid grid-cols-3 sm:grid-rows gap-4">
                <div className="col-span-1">
                    <LeftNav></LeftNav>
                </div>
                <div className="col-span-2 columns-2 md:columns-2 sm:columns-1">
                    <Books></Books>
                </div>
            </div>
        </div>
    );
};

export default Courses;