import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const AllBookPage = ({ books }) => {

    const { image, bookName, author, category } = books;
    return (
        <div>
            <div className="card lg:card-side lg:w-[600px] bg-base-100 shadow-xl mt-5">
                <div className='flex-1'>
                    <figure>
                        <img src={image} alt="Image" className='rounded-xl w-full h-full' />
                    </figure>
                </div>
                <div className="flex-1 flex justify-start items-center ml-4 p-2">
                    <div className='space-y-2'>
                        <h2 className="text-base font-bold">Book Name : {bookName}</h2>
                        <p className='text-base text-gray-500'>Author : {author}</p>
                        <p className='text-base text-gray-500'>Category : {category}</p>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="card-actions mt-4">
                            <Link><button className="flex gap-2 items-center bg-sky-100 rounded-3xl px-3 py-2 text-blue-900 font-medium hover:bg-gray-300">Update <FaArrowRight></FaArrowRight></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
AllBookPage.propTypes = {
    books: PropTypes.object
};
export default AllBookPage;