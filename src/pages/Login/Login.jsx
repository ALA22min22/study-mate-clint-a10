import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const { googleLogin, signInFrom, setUser } = use(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

  

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInFrom(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                toast.success("Login Sucessful");
                setTimeout(()=> navigate(location.state ? location.state : "/"), 1500 )
                
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(`Login Faild:  ${errorCode} and ${errorMessage}`);
            })
    }

    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                setUser(user)
                toast.success("Login Sucessful");
                setTimeout(()=> navigate(location.state? location.state : "/"), 1500 )
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(`Login Faild:  ${errorCode} and ${errorMessage}`);
            })
    }

    return (
        <div className="card mx-auto bg-white w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl text-center font-bold my-6">Login now!</h1>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input w-full " placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input w-full" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn  bg-secondary text-white mt-4">Login</button>
                    </fieldset>
                </form>

                {/* Google */}
                <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>

                {
                    <p className='mt-6'>Are You First Time Our Website? <Link state={location.state} to={"/auth/Register"} className='text-red-500'>Register</Link></p>
                }
            </div>
            <ToastContainer />
        </div>
    );
    
};

export default Login;