import { useLoaderData } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";

const ReadeBook = () => {
    const singleBooKToRead = useLoaderData();
    const { image, bookName, author, category, description, rating } = singleBooKToRead;
    return (
        <div>
            <div className="flex justify-center mx-auto items-center lg:w-[300px] my-5">
                <div>
                    <div>
                        <img src={image} className="w-full rounded-md" alt="" />
                    </div>
                    <div>
                        <h1 className="text-center my-3 text-lg font-medium">Book Name : {bookName}</h1>
                        <p className="text-center">Author : {author}</p>
                        <p className="text-center">Category : {category} &nbsp;&nbsp;&nbsp; Rating : {rating}</p>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-left">{description}</p>
                <p className="mt-5 text-left">Reading books holds immense importance in enriching our lives on multiple levels. It's a gateway to knowledge, imagination, and personal growth.

                    Books are a boundless source of information. Whether you're interested in history, science, self-help, or fiction, books provide access to a wide range of subjects and perspectives. Reading is a key way to acquire knowledge, learn from experts, and stay informed about the world.</p>
                <p className="mt-3 text-gray-400 text-left">
                    Reading fosters intellectual growth. It enhances critical thinking, problem-solving, and analytical skills. It expands vocabulary and language comprehension, contributing to effective communication.</p>
                <p className="mt-3 text-gray-300 text-left">Overall, reading books is a multifaceted activity that offers knowledge, intellectual growth, and personal enrichment. It fosters empathy, promotes relaxation, and provides a lifelong learning journey. Books are valuable tools for individual and societal development. . . . . . . . . . . . . . . . . (to be continue)</p>
            </div>
            <div className="mt-16">
                <h1 className="text-center text-lg font-bold">To Get The Book, Contact Us</h1>
                <AboutUs></AboutUs>
            </div>
        </div>
    );
};

export default ReadeBook;