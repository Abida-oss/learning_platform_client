import React,{useState} from 'react';
import { useContext } from 'react';
import {  Link } from 'react-router-dom';
import { AuthContext } from '../contex/AuthProvider/AuthProvider';


const Signup = () => {

    const  {createUser}=useContext(AuthContext);
    const [passwordError, setPasswordError]=useState([]);
    const [succes, setSuccess]=useState(false);
    const handleSubmit=event=>{
        event.preventDefault();
        setSuccess(false);
      
        const form= event.target;
        const email=form.email.value;
        const name=form.name.value;
        const photoURL=form.photoURL.value
        const password=form.password.value;
        console.log(email,password,name,photoURL);
       
        if(password.length<6)
        {
            setPasswordError('Set at least 6 character');
            return;
        }

        setPasswordError('');
        createUser(email,password)
        .then(res=>{
            const user =res.user;
            console.log(user);
            setSuccess(true);
            form.reset();
        })
        .catch(e=>{
          
            setPasswordError(e.message);

        });

     }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Welcome to our site.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span  className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span  className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required/>
                                </div>
                        
                                <div className="form-control">
                                    <label className="label">
                                        <span   className="label-text">Photo URL</span>
                                    </label>
                                    <input name="photoURL" type="text" placeholder="Photo" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span  className="label-text">Password</span>
                                    </label>
                                    <input  type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span  className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name="confirmpassword" placeholder="confirm password" className="input input-bordered" required />
                                    <label className="label">
                                        <Link  className="label-text-alt link link-hover">Forgot password?</Link>
                                        <Link to='/Signin'  className="label-text-alt link link-hover">Already have an account? </Link>
                                    </label>
                                </div>
                                <p>{passwordError}</p>
                                {succes && <p>User Created successfully</p>}

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>

                            </div>
                           
                        </form>
                        
                </div>
            </div>
        </div>
    );
};

export default Signup;