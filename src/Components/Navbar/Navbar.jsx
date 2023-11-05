import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import logo from '../../assets/img/book-management.png'
const Navbar = () => {

    //Home, Add Book, All Books, Borrowed Books, and Login
    const navLinks = <>
        <li className='font-semibold'><Link>Home</Link></li>
        <li className='font-semibold'><Link>Add Book</Link></li>
        <li className='font-semibold'><Link>All Books</Link></li>
        <li className='font-semibold'><Link>Borrowed Books</Link></li>

    </>
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
                    <Link className="bg-slate-600 rounded-3xl py-1 px-3 text-white font-semibold">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;