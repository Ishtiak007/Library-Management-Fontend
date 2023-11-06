import { FaArrowRight, FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const AboutUs = () => {
    return (
        <div className="lg:flex justify-evenly my-5  bg-gradient-to-r from-gray-50 to-gray-200 p-4 rounded-md">
            <div className="bg-gray-100 p-4 rounded-md">
                <FaLocationArrow className="text-4xl text-orange-900"></FaLocationArrow>
                <h1 className="text-2xl font-bold my-3">Address</h1>
                <p className="text-gray-500 cursor-pointer hover:text-blue-500">Dhap, Lalkuthi, Kotkipara, Rangpur</p>
                <p className="text-gray-500 cursor-pointer hover:text-blue-500">Road : 001</p>
                <p className="text-gray-500 cursor-pointer hover:text-blue-500">Building : #1232</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
                <FaPhone className="text-4xl text-orange-900"></FaPhone>
                <h1 className="text-2xl font-bold my-3">Phone</h1>
                <p className="text-gray-500 flex items-center hover:text-blue-500 cursor-pointer"><FaArrowRight className="mr-2"></FaArrowRight>phn: 01737-223990</p>
                <p className="text-gray-500 flex items-center my-2 hover:text-blue-500 cursor-pointer"><FaArrowRight className="mr-2"></FaArrowRight>phn: 01853-196899</p>
                <p className="text-gray-500 flex items-center hover:text-blue-500 cursor-pointer"><FaArrowRight className="mr-2"></FaArrowRight>tel: +0089-86234</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
                <MdEmail className="text-4xl text-orange-900"></MdEmail>
                <h1 className="text-2xl font-bold my-3">Email</h1>
                <p className="text-gray-500 cursor-pointer underline hover:text-blue-500 my-3">ishtiak.sparrow98@gmail.com</p>
                <p className="text-gray-500 cursor-pointer underline hover:text-blue-500">ishtiakahmed01999@gmail.com</p>
            </div>
        </div>
    );
};

export default AboutUs;