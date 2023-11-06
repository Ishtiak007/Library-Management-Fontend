import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import logo from '../../assets/img/book-management.png'
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';
import toast from 'react-hot-toast';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    const navLinks = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/addBook'>Add Book</Link></li>
        <li className='font-semibold'><Link>All Books</Link></li>
        <li className='font-semibold'><Link>Borrowed Books</Link></li>

    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log Out successfully!');
            })
            .catch(() => {
                toast.error("Something wrong. Please Try again")
            })

    }

    //Home, Add Book, All Books, Borrowed Books, and Login

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FaBars className='text-2xl'></FaBars>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="w-28 rounded-full flex"><img src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user && <div><img className="mr-3 border-[3px] border-white w-[40px] rounded-full" src={user.photoURL} alt="" /></div>
                    }
                    {
                        user ? <div>
                            <span className="bg-gray-100 p-[2px] rounded-md mr-3">{user.displayName}</span>
                            <button onClick={handleLogOut} className="bg-slate-600 rounded-3xl py-1 px-3 text-white font-semibold">LogOut</button>
                        </div>

                            : <Link to='/login'><button className="bg-slate-600 rounded-3xl py-1 px-3 text-white font-semibold">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;