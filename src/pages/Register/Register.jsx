import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';


const Register = () => {
    const { handleRegister, setUser, googleLogin } = use(AuthContext);
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log(name, email, photo, password);

        //password validation:
        const upperCase = /^(?=.*[A-Z]).+$/;
        const lowerCase = /^(?=.*[a-z]).+$/;
        const passLength = /^.{6,}$/;

        if(!upperCase.test(password)){
            setPasswordError("Must contain at least one Uppercase letter.");
            return;
        }
        else if(!lowerCase.test(password)){
            setPasswordError("Must contain at least one Lower letter.");
            return;
        }
        else if(!passLength.test(password)){
            setPasswordError("Must be at least 6 characters long.")
            return;
        }
        else{
            setPasswordError("")
        }




        handleRegister(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                if(user){
                    toast.success("Register Sucessful");
                    setTimeout(()=> navigate(location.state? location.state : "/"), 1500);
                }

            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(`Register Faild:  ${errorCode} and ${errorMessage}`);
            })

    }

    const handleGoogleSubmit = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                setUser(user)               
                toast.success("Register Sucessful");
                setTimeout(()=> navigate( location.state? location.state :"/"), 1500 )
                
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(`Register Faild:  ${errorCode} and ${errorMessage}`);
            })
    }

    return (
        <div className="card mx-auto bg-white w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl text-center font-bold my-6">Register now!</h1>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Name" />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Email" />
                        {/* Photo Url */}
                        <label className="label">Photo Url</label>
                        <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
                        {/* Password */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input w-full" placeholder="Password" />
                        <p className='text-red-500'>{passwordError}</p>

                        <button className="btn  bg-secondary text-white mt-4">Register</button>
                    </fieldset>
                </form>

                {/* Google */}
                <button onClick={handleGoogleSubmit} className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>

                {
                    <p className='mt-6'>Already have an account? <Link to={"/auth/login"} className='text-red-500'>Login</Link></p>
                }
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;