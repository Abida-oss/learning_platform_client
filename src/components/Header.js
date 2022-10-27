import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contex/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))

    }
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                {/* <Link className="btn btn-ghost normal-case text-xl">Coursera</Link>
                <Link to='/Signin' className="btn btn-ghost normal-case text-xl">SignIn</Link>
                <Link to='/Signup' className="btn btn-ghost normal-case text-xl">SignUp</Link>
                <Link to='/Signout' className="btn btn-ghost normal-case text-xl">SignOut</Link>
                <Link to='/books' className="btn btn-ghost normal-case text-xl">Courses</Link> */}

                <Link to='' className="btn btn-ghost normal-case text-xl">
                    {

                        user?.uid ?
                            <>
                                <span> {user?.displayName}</span>
                                <Link onClick={handleLogOut} className="btn btn-ghost normal-case text-xl">LogOut</Link>
                                <Link to='/books' className="btn btn-ghost normal-case text-xl">Courses</Link>

                            </>
                            :

                            <>
                                <Link to='/Signin' className="btn btn-ghost normal-case text-xl">SignIn</Link>
                                <Link to='/Signup' className="btn btn-ghost normal-case text-xl">SignUp</Link>
                                <Link to='/books' className="btn btn-ghost normal-case text-xl">Courses</Link>

                            </>
                    }
                </Link>


                <Link to='' className="btn btn-ghost normal-case text-xl">{user?.photoURL ? <img className="w-10 rounded-full" src={user?.photoURL} /> : 'users'}</Link>


            </div>


        </div>
    );
};

export default Header;