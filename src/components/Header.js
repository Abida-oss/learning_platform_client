import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link className="btn btn-ghost normal-case text-xl">Coursera</Link>
                <Link to='/Signin' className="btn btn-ghost normal-case text-xl">SignIn</Link>
                <Link to='/Signup' className="btn btn-ghost normal-case text-xl">SignUp</Link>
                <Link to='/books' className="btn btn-ghost normal-case text-xl">Courses</Link>
            </div>


        </div>
    );
};

export default Header;