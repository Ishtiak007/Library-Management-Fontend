import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import favouriteBook from '../../assets/img/favoritebook.jpg'
const FindFavouriteBook = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='flex-1'>
                        <img src={favouriteBook} className="w-full rounded-lg" />

                    </div>
                    <div className='flex-1'>
                        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Find Your Favourite <br></br><span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Book Here,</span> </h1>
                        <p className="py-4 text-gray-500">Explore our vast collection and find your favorite book among a diverse selection of genres, ensuring a satisfying reading experience.</p>
                        <div className='lg:flex gap-6 my-5'>
                            <div>
                                <h1 className='text-3xl font-bold'>500 +</h1>
                                <p className='text-base font-medium text-gray-500 my-1'>Book Listing</p>
                            </div>
                            <div>
                                <h1 className='text-3xl font-bold'>450 +</h1>
                                <p className='text-base font-medium text-gray-500 my-1'>Register User</p>
                            </div>
                            <div>
                                <h1 className='text-3xl font-bold'>1200 +</h1>
                                <p className='text-base font-medium text-gray-500 my-1'>PDF Downloaded</p>
                            </div>
                        </div>
                        <Link to='/category'><button className="flex gap-2 items-center bg-gradient-to-r from-violet-500 to-fuchsia-500  rounded-3xl px-3 py-2 text-white font-medium">Let Us Find <FaArrowRight></FaArrowRight></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindFavouriteBook;