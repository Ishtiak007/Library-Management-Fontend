import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {
    const updateBook = useLoaderData();
    const { _id, image, bookName, author, category, rating } = updateBook;

    const handleUpdateBook = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const bookName = form.name.value;
        const author = form.author.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const newBook = { image, bookName, author, category, rating }
        console.log(newBook)

        fetch(`http://localhost:5000/allBooks/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Book information Updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }
            })
    }
    return (
        <div>
            <div style={{ '--image-url': `url(${image})` }}
                className='bg-[image:var(--image-url)] relative overflow-hidden rounded-b-md bg-no-repeat text-center h-[200px] lg:h-[500px] bg-cover'>
                <div className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3ac4]">
                    <div className="w-full h-full flex justify-center items-center">
                        <div>
                            <h1 className="text-white text-2xl font-semibold font-serif">You are Updating : {bookName}</h1>
                            <p className="text-white font-serif">Category : {category}</p>
                            <p className="text-white font-serif">Author : {author} &nbsp;&nbsp;&nbsp; Rating : {rating}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow-md bg-zinc-200 p-3 rounded-md my-7">
                <form onSubmit={handleUpdateBook}>
                    {/* image and book name */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Book Image</span>
                            </label>
                            <label>
                                <input defaultValue={image} type="text" name="image" placeholder="Image" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Book Name</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={bookName} type="text" name="name" placeholder="Book Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* author and rating */}
                    <div className="md:flex mb-8 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Author name</span>
                            </label>
                            <label>
                                <input defaultValue={author} type="text" name="author" placeholder="Author Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Book Rating</span>
                            </label>
                            <label>
                                <input defaultValue={rating} type="number" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* category */}
                    <div className="md:flex mb-8 ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label>
                                <select defaultValue={category} name="category" className="form-control w-full py-3 px-4 rounded-md outline-1 outline-black">
                                    <option value="Novel">Novel</option>
                                    <option value="Thriller">Thriller</option>
                                    <option value="History">History</option>
                                    <option value="Drama">Drama</option>
                                    <option value="SciFi">SciFi</option>
                                    <option value="Comedy">Comedy</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="text-center">
                        <input className="px-10 py-2 rounded-3xl cursor-pointer mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold text-white" type="submit" value="Submit For Update" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBook;