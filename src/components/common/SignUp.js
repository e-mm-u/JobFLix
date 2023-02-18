import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContextProvider';

const SignUp = () => {
    const { register, handleSubmit} = useForm();
    const { createUser, updateUser, googleLogin} = useContext(AuthContext);

    const handleSignUp = data =>{
        const {name, email, pass} = data;

        createUser(email, pass)
            .then(res =>{
                const user = res.user;
                const userInfo = {
                    displayName : name
                }
                updateUser(userInfo)
                    .then(()=>{
                        console.log('updated')
                    })
            })
            .catch(err => console.log(err))
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                const user = res.user;
                console.log(user)
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <h1 className="text-xl font-bold text-center">SignUp </h1>
            <div className="flex flex-col w-full max-w-sm mx-auto p-4">
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register('name')} type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register('email')} type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register('pass')} type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href=" " className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    {/* <div className="form-control mt-6">
                        <p className='inline-block'>Register as :</p>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input form-check-input rounded-full h-4 w-4 mr-2 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top  cursor-pointer"
                                type="radio"
                                value="buyer"
                                {...register('role')}
                                checked
                            />
                            <label className="form-check-label inline-block text-gray-800" >Buyer</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input form-check-input rounded-full h-4 w-4 mr-2 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top  cursor-pointer"
                                type="radio"
                                value="seller"
                                {...register('role')}
                            />
                            <label className="form-check-label inline-block text-gray-800" >Seller</label>
                        </div>
                    </div> */}
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Sign Up</button>
                    </div>
                    <div className='text-blue-500 mt-2'>
                        <Link to='/login'>Already have an account?</Link>
                    </div>

                </form>
                <div className="form-control mt-6">
                    <p className='divider'>OR</p>
                    <button onClick={()=>handleGoogleLogin()} type='submit' className="btn btn-warning">Sign in with Google</button>
                </div>
            </div>
        </>

    );
};

export default SignUp;