import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
const [courses,setCourses] = useState([])

useEffect(() =>{
    fetch('https://assignment-10-server-dusky-three.vercel.app/all-course')
    .then(res => res.json() )
    .then(data => setCourses(data));
},[])

    return (
        <div>
            <h1 className='text-2xl italic font-bold mt-2 mb-6'>All Courses</h1>
            <div>
                {
                    courses.map(course =><p className='mb-2' key={course.id}>
                        <button className="btn btn li btn-xs sm:btn-sm md:btn-md lg:btn-lg"><Link to={`/books/${course.id}`}>{course.course_name}</Link></button>
                    </p>)
                }
            </div>

         </div>
    );
};

export default LeftNav;