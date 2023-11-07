import { Link, useLoaderData } from "react-router-dom";
import { BsFillAwardFill } from "react-icons/bs";
import { FaArrowRight, FaStar } from "react-icons/fa";

const BookDetails = () => {
    const singleBooKDetails = useLoaderData();
    const { _id, image, bookName, author, category, description, rating } = singleBooKDetails;
    return (
        <div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                <div>
                    <div className="lg:flex justify-center items-center p-4">
                        <img src={image} className="lg:w-2/3 rounded-md" alt="" />
                    </div>
                    <div>
                        <div className="text-center my-4">
                            <button className="bg-green-700 hover:bg-green-800 btn w-3/4 px-3 py-2 rounded-3xl text-white">Want To Read</button>
                        </div>

                        <div className="text-center">

                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="w-3/4 px-3 py-2 rounded-3xl text-gray-600 btn border-t-green-600 border-b-green-600 border-r-green-600 border-l-green-600">Want To Borrow</button>


                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Please Fullfill the form</h3>
                                    <div className="modal-action text-center">
                                        <form className="card-body">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" placeholder="email" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control mt-6">
                                                <button className="w-full px-3 py-2 rounded-3xl text-gray-600 btn border-t-green-600 border-b-green-600 border-r-green-600 border-l-green-600">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>

                    </div>
                    <div className="my-3 text-center">
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h1 className="text-gray-500 font-medium">Rate this Book If you are happy</h1>
                    </div>
                </div>
                <div className="lg:col-span-2 p-3">
                    <h1 className="text-3xl font-semibold">Name : {bookName}</h1>
                    <h2 className="flex items-center text-lg my-4 text-gray-600 gap-3">Author : {author} <BsFillAwardFill className="text-gray-500"></BsFillAwardFill></h2>

                    <div className="lg:flex gap-5"><p className="text-base text-gray-500 font-medium">Book ID : {_id}</p>
                        <p className="flex items-center gap-2 text-base text-gray-500 font-medium">Public Rating : {rating} <FaStar className="text-orange-400"></FaStar></p></div>
                    <h3 className="text-gray-500">Category : {category}</h3>
                    <h3 className="text-gray-500">Language : English</h3>
                    <div className="my-10">
                        <p>{description}</p>
                    </div>
                    <div>
                        <p className="text-base text-gray-400">Reading books cultivates knowledge, imagination, empathy, and communication skills. It enhances personal growth, reduces stress, and supports lifelong learning, contributing to intellectual enrichment and societal well-being.So, I suggest to read this book . . . .</p>
                    </div>
                    <div className="my-10">
                        <h1 className="text-blue-900">Book Rating Progress Bar</h1>
                        <div>
                            <p className="flex items-center gap-3">5 <FaStar className="text-orange-400"></FaStar> <progress className="progress  progress-info w-56" value="100" max="100"></progress></p>
                        </div>
                        <div>
                            <p className="flex items-center gap-3">4 <FaStar className="text-orange-400"></FaStar> <progress className="progress  progress-info w-56" value="70" max="100"></progress></p>
                        </div>
                        <div>
                            <p className="flex items-center gap-3">3 <FaStar className="text-orange-400"></FaStar>  <progress className="progress  progress-info w-56" value="40" max="100"></progress></p>
                        </div>
                        <div>
                            <p className="flex items-center gap-3">2 <FaStar className="text-orange-400"></FaStar> <progress className="progress  progress-info w-56" value="10" max="100"></progress></p>
                        </div>
                        <div>
                            <p className="flex items-center gap-3">1 <FaStar className="text-orange-400"></FaStar> <progress className="progress  progress-info w-56" value={0} max="100"></progress> </p>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ '--image-url': 'url(https://i.ibb.co/HpPhHr8/shiromani-kant-t-HKl-Db5-Ez-N4-unsplash-1.jpg)' }}
                className='bg-[image:var(--image-url)] relative overflow-hidden rounded-b-md bg-no-repeat text-center h-[200px] lg:h-[400px] bg-cover rounded-lg'>
                <div className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3ac4]">
                    <div className="w-full h-full flex justify-center items-center">
                        <div>
                            <h1 className="text-white text-2xl font-semibold">Cant find what youre looking for?</h1>
                            <p className="text-gray-200">Get help and learn more about the design.</p>
                            <div className="py-4">
                                <Link to='/aboutUs'><button className="mx-auto flex gap-2 items-center bg-gradient-to-r from-violet-500 to-fuchsia-500  rounded-3xl px-3 py-2 text-white font-medium">Contact With Us <FaArrowRight></FaArrowRight></button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;