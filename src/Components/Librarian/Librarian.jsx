const Librarian = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 rounded-md">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:w-1/2 relative'>
                        <img src='https://i.ibb.co/VHNhTqt/shiromani-kant-Hqbkgga0r-NQ-unsplash-1.jpg' className="lg:w-3/4 w-1/2 rounded-lg shadow-2xl" />
                        <img src='https://i.ibb.co/R4HDFWt/ahmed-almakhzanji-kshk-B1i5-5o-unsplash.jpg' className='lg:w-1/2 w-1/2 absolute right-5 top-1/2 border-8  border-white rounded-lg shadow-2xl' alt="" />
                    </div>
                    <div className='lg:w-1/2 space-y-5 p-4 mt-10'>
                        <h3 className='text-sky-600 text-2xl font-bold'>About Maintainer</h3>
                        <h1 className="lg:text-5xl font-bold">Essential Roles and Responsibilities of a Library Maintainer</h1>
                        <p className="py-6">Library maintainers play a crucial role in preserving and organizing library collections. They manage acquisitions, cataloging, preservation, and ensure resources are available to patrons. Their responsibilities vary but aim to enhance the library s efficiency and user experience</p>

                        <p>Library maintainers oversee resources, ensuring organization, accessibility, and user satisfaction.</p>
                        <div className="flex items-center gap-4 mt-3">
                            <div><img className="w-[70px] border-[3px] border-green-500 rounded-full" src="https://i.ibb.co/sRXWn6X/2222.png" alt="" /></div>
                            <div>
                                <h2 className="font-semibold text-lg">Ishtiak Ahmed</h2>
                                <p className="font-semibold text-gray-400">Whose contribution is behind everything</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Librarian;