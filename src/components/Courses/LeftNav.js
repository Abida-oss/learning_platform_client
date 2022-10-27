import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
const [courses,setCourses] = useState([])

useEffect(() =>{
    fetch('http://localhost:5000/all-course')
    .then(res => res.json() )
    .then(data => setCourses(data));
},[])

    return (
        <div>
            <h1 className='text-2xl mt-2 mb-6'>All Courses: {courses.length}</h1>
            <div>
                {
                    courses.map(course =><p className='mb-2' key={course.id}>
                        <button className="btn btn btn-wide btn-xs sm:btn-sm md:btn-md lg:btn-lg"><Link to={`/books/${course.id}`}>{course.course_name}</Link></button>
                    </p>)
                }
            </div>

         </div>
    );
};

export default LeftNav;