import { FaCarSide, FaRetweet, FaBookOpen, FaHandHoldingHeart, FaFilePdf } from "react-icons/fa";
const AfterBanner = () => {
    return (
        <div className="my-10 flex justify-center items-center">
            <div>
                <div className="lg:flex gap-10">
                    <div>
                        <div className="card w-48 bg-base-100 shadow-xl  h-60 mt-4">
                            <figure className="px-5 pt-5">
                                <FaCarSide className="text-7xl text-sky-300"></FaCarSide>
                            </figure>
                            <div className="p-4">
                                <h2 className="text-lg font-medium text-gray-600">Free Standard Delivery</h2>
                                <p className="text-sm text-gray-400 mt-3">Get items delivered at no extra cost with our standard service.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-48 bg-base-100 shadow-xl h-60 mt-4">
                            <figure className="px-5 pt-5">
                                <FaRetweet className="text-7xl text-sky-300"></FaRetweet>
                            </figure>
                            <div className="p-4">
                                <h2 className="text-lg font-medium text-gray-600">Free Easy Returns</h2>
                                <p className="text-sm text-gray-400 mt-3">Hassle-free returns at no cost for your convenience and satisfaction.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-48 bg-base-100 shadow-xl h-60 mt-4">
                            <figure className="px-5 pt-5">
                                <FaBookOpen className="text-7xl text-sky-300"></FaBookOpen>
                            </figure>
                            <div className="p-4">
                                <h2 className="text-lg font-medium text-gray-600">Enough Books Available</h2>
                                <p className="text-sm text-gray-400 mt-3">Abundant books in stock for all your reading desires.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-48 bg-base-100 shadow-xl h-60 mt-4">
                            <figure className="px-5 pt-5">
                                <FaHandHoldingHeart className="text-7xl text-sky-300"></FaHandHoldingHeart>
                            </figure>
                            <div className="p-4">
                                <h2 className="text-lg font-medium text-gray-600">Special Discounts</h2>
                                <p className="text-sm text-gray-400 mt-3"> Special discounts to enhance your shopping experience.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-48 bg-base-100 shadow-xl h-60 mt-4">
                            <figure className="px-5 pt-5">
                                <FaFilePdf className="text-7xl text-sky-300"></FaFilePdf>
                            </figure>
                            <div className="p-4">
                                <h2 className="text-lg font-medium text-gray-600">PDF Download</h2>
                                <p className="text-sm text-gray-400 mt-3"> You can download your selected book as PDF file.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AfterBanner;