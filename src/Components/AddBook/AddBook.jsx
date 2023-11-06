import MarqueeSlider from "../MarqueeSlider/MarqueeSlider";

const AddBook = () => {
    const handleAddBook = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const bookName = form.name.value;
        const quantity = form.quantity.value;
        const author = form.author.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const description = form.description.value;

        console.log(image, bookName, quantity, author, category, rating, description)
    }
    return (
        <div>
            <div style={{ '--image-url': 'url(https://i.ibb.co/HpPhHr8/shiromani-kant-t-HKl-Db5-Ez-N4-unsplash-1.jpg)' }}
                className='bg-[image:var(--image-url)] relative overflow-hidden rounded-b-md bg-no-repeat text-center h-[200px] lg:h-[600px] bg-cover rounded-lg'>
                <div className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3ac4]">
                    <div className="w-full h-full flex justify-center items-center">
                        <h1 className="text-white text-4xl font-semibold font-serif">Add Book</h1>
                    </div>
                </div>
            </div>
            <div className="shadow-md bg-gray-100 p-3 rounded-md my-7">
                <form onSubmit={handleAddBook}>
                    {/* name and brand row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">

                            <label>
                                <input type="text" name="image" placeholder="Image" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">

                            <label className="input-group">
                                <input type="text" name="name" placeholder="Book Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* type and price row */}
                    <div className="md:flex mb-8 ">
                        <div className="form-control md:w-1/2">

                            <label>
                                <input type="number" name="quantity" placeholder="Quantity Of The Book" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">

                            <label>
                                <input type="text" name="author" placeholder="Author Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* photo url and rating row */}
                    <div className="md:flex mb-8 ">
                        <div className="form-control md:w-1/2">

                            <label>
                                <select name="category" className="form-control w-full py-3 px-4 rounded-md outline-1 outline-black">
                                    <option value="Nobel">Nobel</option>
                                    <option value="Thriller">Thriller</option>
                                    <option value="History">History</option>
                                    <option value="Drama">Drama</option>
                                    <option value="SciFi">SciFi</option>
                                    <option value="Comedy">Comedy</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">

                            <label>
                                <input type="number" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* short description row */}
                    <div className=" mb-8">
                        <div className="form-control w-full">

                            <label>
                                <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full h-[100px]" />
                            </label>
                        </div>
                    </div>
                    <div className="text-center">
                        <input className="px-10 py-2 rounded-3xl cursor-pointer mx-auto bg-gradient-to-r from-green-500 to-green-700 font-bold text-white" type="submit" value="Add Book" />
                    </div>
                </form>
            </div>
            <div>
                <MarqueeSlider></MarqueeSlider>
            </div>
        </div>
    );
};

export default AddBook;