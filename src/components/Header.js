import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contex/AuthProvider/AuthProvider';
import { FaBuffer, FaUserAlt } from "react-icons/fa";
import { useState } from 'react';
import ReactSwitch from 'react-switch';
import { useEffect } from 'react';


const Header = () => {
    const [theme, setTheme] = useState("dark");
    const toogleTheme = () => {
        setTheme(curr => (curr === "dark" ? "light" : "dark"))
    }

    useEffect(()=>{
        document.body.className =theme;

    },[theme]);
    



    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))

    }
    return (
        <div className='li'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {user?.uid ?
                                <>
                                    <li><span className="btn normal-case text-xl"> {user?.displayName}</span></li>
                                    <li><Link onClick={handleLogOut} className="btn btn-ghost normal-case text-xl">LogOut</Link></li>
                                    <li><Link to='/Home' className="btn btn-ghost normal-case text-xl">Home</Link></li>
                                    <li><Link to='/books' className="btn btn-ghost normal-case text-xl">Courses</Link></li>
                                    <li tabIndex={0}>
                                        <Link to='/Blog' className="btn btn-ghost normal-case text-xl justfy-between">FAQ</Link>
                                    </li> </> :
                                <>
                                    <li><Link to='/Home' className="btn btn-ghost normal-case text-xl">Home</Link></li>
                                    <li><Link to='/Signin' className="btn btn-ghost normal-case text-xl">SignIn</Link></li>
                                    <li><Link to='/Signup' className="btn btn-ghost normal-case text-xl">SignUp</Link></li>
                                    <li tabIndex={0}>
                                        <Link to='/books' className="btn btn-ghost normal-case text-xl">Courses</Link>
                                    </li>
                                    <li><Link to='/Blog' className="btn btn-ghost normal-case text-xl">FAQ</Link></li>
                                </>}
                        </ul>
                    </div>
                   <FaBuffer></FaBuffer> <Link className="btn btn-ghost normal-case text-2xl font-bold">Coursera</Link>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {user?.uid ?
                            <>
                                <li><span className="normal-case text-xl"> {user?.displayName}</span></li>
                                <li><Link onClick={handleLogOut} className="btn btn-ghost normal-case text-xl">LogOut</Link></li>
                                <li><Link to='/Home' className="btn btn-ghost normal-case text-xl">Home</Link></li>
                                <li><Link to='/books' className="btn btn-ghost normal-case text-xl">Courses</Link></li>
                                <li tabIndex={0}>
                                    <Link to='/Blog' className="btn btn-ghost normal-case text-xl">FAQ</Link>
                                </li>
                            </> :
                            <>
                                <li><Link to='/Home' className="btn btn-ghost normal-case text-xl">Home</Link></li>
                                <li> <Link to='/Signin' className="btn btn-ghost normal-case text-xl">SignIn</Link></li>
                                <li><Link to='/Signup' className="btn btn-ghost normal-case text-xl">SignUp</Link></li>
                                <li tabIndex={0}>
                                    <Link to='/books' className="btn btn-ghost normal-case text-xl">Courses</Link>
                                </li>
                                <li><Link to='/Blog' className="btn btn-ghost normal-case text-xl">FAQ</Link></li>
                            </>}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn btn-ghost normal-case text-xl">{user?.photoURL ? <img alt='' className="w-10 rounded-full" src={user?.photoURL} title={user.displayName} /> : <FaUserAlt></FaUserAlt>}</Link>
                    <Link className="btn"><ReactSwitch onChange={toogleTheme} checked={theme === "dark"}></ReactSwitch></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;