import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/img/login.svg'
import { useContext, useState } from 'react';
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
const LoginPage = () => {
    const { signInUser, googleLogIn, gitHubLogin } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then((result) => {
                toast.success('Your Login process Successfully done!');
                console.log(result.user);
                e.target.reset();
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                toast.error("Invalid login credentials , Provide your valid email and password")
                console.log(error)
            })
    }

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then((res) => {
                toast.success('Google Log In successfully!');
                console.log(res.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                toast.error("Invalid login credentials")
                console.log(error)
            })
    }

    const handleGithubLogIn = () => {
        gitHubLogin()
            .then((res) => {
                toast.success('GitHub Log In successfully!');
                console.log(res.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                toast.error("Invalid login credentials")
                console.log(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-gray-100 to-cyan-50">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:mr-12 lg:w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card  bg-base-100 lg:max-w-[500px] max-w-[280px]">
                    <form onSubmit={handleLogin} className='lg:p-5 p-2'>
                        <div>
                            <p className="py-4 text-center text-xl font-semibold text-blue-900">Login Here</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter Password" className="input input-bordered" required />
                            <span className='cursor-pointer text-xl absolute bottom-3 right-5' onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                }
                            </span>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white  font-semibold">Login</button>
                        </div>
                        <div>
                            <hr className="my-4" />
                            <h1 className="text-xl font-bold text-center mt-4">You can also Login With</h1>
                            <button onClick={handleGoogleLogIn} className="btn w-full hover:text-blue-600 my-4">
                                <FaGoogle className="text-lg"></FaGoogle>
                                Login with Google
                            </button>
                            <button onClick={handleGithubLogIn} className="btn w-full hover:text-blue-600">
                                <FaGithub className="text-lg"></FaGithub>
                                Login with Github
                            </button>
                        </div>
                        <div>
                            <p className="text-base my-3">Have nt Any an Account? So, Please <Link to='/register' className="text-blue-600 underline">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;