import { Link } from "react-router-dom";

const RegisterLink = () => {
    return (
        <div className="my-6">
            <div style={{ '--image-url': 'url(https://i.ibb.co/wsNf49n/melanie-deziel-21zol-Rrolp0-unsplash.jpg)' }}
                className='bg-[image:var(--image-url)] relative overflow-hidden rounded-b-md bg-no-repeat text-center h-[200px] lg:h-[500px] bg-cover'>
                <div className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3ac4]">
                    <div className="w-full h-full flex justify-center items-center">
                        <div>
                            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-4xl font-semibold font-serif">For Borrowe Book, Please Register</h1>
                            <p className="text-white text-xl font-medium py-3">Join our community and embark on a journey of discovery. Register today to access an array of exclusive features, connect with like-minded individuals, and unlock a world of diverse resources at your fingertips.</p>
                            <div>
                                <Link to='/register'><button className="bg-gradient-to-r from-purple-500 to-pink-500 py-[7px] px-[16px] font-medium rounded-3xl text-white text-sm">Register Now</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterLink;