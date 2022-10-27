import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../contex/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const Signin = () => {

    const { signIn } = useContext(AuthContext);

    
    //Private Routing for check out
    const navigate= useNavigate();
    const location=useLocation();
    const from=location.state?.from.pathname|| '/category'
  

    //email,pass
    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;

        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();

                navigate(from,{replace:true}) //private route
            })
            .catch(e => console.error(e));
    }

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    // const githubProvider=new GithubAuthProvider();



    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((res) => {
                // Signed in 
                const user = res.user;
                console.log(user);

                navigate(from,{replace:true}) //private router
                // ...
            })

            .catch(error => console.error(error));

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Welcome to our site.</p>
                    </div>
                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary my-3" ><Link>Login</Link></button>
                            <button onClick={handleGoogleSignIn} className="btn btn-primary my-3">Login with google</button>
                            {/* <button  onClick={handleGithubSignIn} className="btn btn-primary">Login with github</button> */}
                        </div>
                    </div>
                </form >
            </div>
            </div>
        </div>
    );
};

export default Signin;