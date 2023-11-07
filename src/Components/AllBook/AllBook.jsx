import { useLoaderData } from "react-router-dom";
import MarqueeSlider from "../MarqueeSlider/MarqueeSlider";
import AllBookPage from "./AllBookPage";

const AllBook = () => {
    const allBooks = useLoaderData();

    return (
        <div>
            <div style={{ '--image-url': 'url(https://i.ibb.co/j8Lj8Px/susan-q-yin-2-JIvbo-GLeho-unsplash-1.jpg)' }}
                className='bg-[image:var(--image-url)] relative overflow-hidden rounded-b-md bg-no-repeat text-center h-[200px] lg:h-[600px] bg-cover rounded-lg'>
                <div className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3ac4]">
                    <div className="w-full h-full flex justify-center items-center">
                        <h1 className="text-white text-4xl font-semibold font-serif">All Book Route</h1>
                    </div>
                </div>
            </div>
            <div className="text-center my-5 bg-slate-200 p-4 rounded-md">
                <button className="bg-blue-500 text-white font-medium rounded-2xl px-10 py-2">Available Books</button>
            </div>
            <div className="flex justify-evenly flex-wrap my-4">
                {
                    allBooks.map(books => <AllBookPage key={books._is} books={books}></AllBookPage>)
                }
            </div>
            <div>
                <MarqueeSlider></MarqueeSlider>
            </div>
        </div>
    );
};

export default AllBook;