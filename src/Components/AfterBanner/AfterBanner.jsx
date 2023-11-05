import { FaCarSide, FaRetweet, FaBookOpen, FaHandHoldingHeart } from "react-icons/fa";
const AfterBanner = () => {
    return (
        <div className="my-10 flex justify-center items-center">
            <div>
                <div className="lg:flex gap-10">
                    <div>
                        <div className="card w-48 bg-base-100 shadow-xl  h-60 mt-4">
                            <figure className="px-10 pt-10">
                                <FaCarSide className="text-7xl text-orange-500"></FaCarSide>
                            </figure>
                            <div className="p-4">
                                <h2 className="text-lg font-medium text-gray-600">Free Standard Delivery</h2>
                                <p className="text-sm text-gray-400">Get items delivered at no extra cost with our standard service.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-48 bg-base-100 shadow-xl h-60 mt-4">
                            <figure className="px-10 pt-10">
                                <FaRetweet className="text-7xl text-orange-500"></FaRetweet>
                            </figure>
                            <div className="p-4">
                                <h2 className="text-lg font-medium text-gray-600">Free Easy Returns</h2>
                                <p className="text-sm text-gray-400">Hassle-free returns at no cost for your convenience and satisfaction.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-48 bg-base-100 shadow-xl h-60 mt-4">
                            <figure className="px-10 pt-10">
                                <FaBookOpen className="text-7xl text-orange-500"></FaBookOpen>
                            </figure>
                            <div className="p-4">
                                <h2 className="text-lg font-medium text-gray-600">Enough Books Available</h2>
                                <p className="text-sm text-gray-400">Abundant books in stock for all your reading desires.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-48 bg-base-100 shadow-xl h-60 mt-4">
                            <figure className="px-10 pt-10">
                                <FaHandHoldingHeart className="text-7xl text-orange-500"></FaHandHoldingHeart>
                            </figure>
                            <div className="p-4">
                                <h2 className="text-lg font-medium text-gray-600">Special Discounts</h2>
                                <p className="text-sm text-gray-400"> Special discounts to enhance your shopping experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AfterBanner;