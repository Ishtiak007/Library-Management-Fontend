import bookListImg from '../../assets/img/awardbooks.png'
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookListLink = () => {
    return (
        <div className="p-6 lg:flex bg-gradient-to-r from-gray-100 to-cyan-50 my-6 rounded-xl">
            <div className="flex-1 flex justify-center items-center">
                <div>
                    <h1 className='text-3xl font-bold'>Explore To See Our Book Lists</h1>
                    <p className='my-3 text-lg text-gray-500'>Access our comprehensive library of books with a single click, your gateway to a world of knowledge and entertainment.</p>
                    <Link to='/allBook'><button className="flex gap-2 items-center bg-gradient-to-r from-purple-500 to-pink-500  rounded-3xl px-3 py-2 text-white font-medium">Explore Now <FaArrowRight></FaArrowRight></button></Link>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src={bookListImg} className='lg:w-1/2' alt="bookListImg" />
            </div>
        </div>
    );
};

export default BookListLink;