import React from 'react';
import Books from './Books';
import LeftNav from './LeftNav';

const Courses = () => {

    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    <LeftNav></LeftNav>
                </div>
                <div className="col-span-2 lg:columns-2 sm:columns-1 xs:columns-1">
                    <Books></Books>
                </div>
            </div>
        </div>
    );
};

export default Courses;