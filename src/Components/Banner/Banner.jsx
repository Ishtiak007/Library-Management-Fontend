// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><div className="hero relative overflow-hidden rounded-lg bg-no-repeat text-center bg-[url('https://i.ibb.co/gSGNBkv/jilbert-ebrahimi-HAw-A1-N2gjo8-unsplash.jpg')] h-[400px] lg:h-[600px] bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl">
                                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">Streamlined Library Management System for Efficient Resource Control.</h1>
                                <p className="text-sm text-white my-2">An advanced system for easy library resource organization, lending, and tracking, enhancing operational efficiency and access.</p>
                                <Link to='/register'><button className="bg-orange-500 py-[4px] px-[13px] font-medium rounded-3xl text-white text-sm border-2  border-white hover:bg-orange-700">Register Now</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide><div className="hero relative overflow-hidden rounded-lg bg-no-repeat text-center bg-[url('https://i.ibb.co/GHsKmpy/giammarco-boscaro-ze-H-ljaw-Htg-unsplash.jpg')] h-[400px] lg:h-[600px] bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl">
                                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500">ReadEase: Library Power at Your Fingertips</h1>
                                <p className="text-sm text-white my-2">An advanced system for easy library resource organization, lending, and tracking, enhancing operational efficiency and access.</p>
                                <Link to='/register'><button className="bg-orange-500 py-[4px] px-[13px] font-medium rounded-3xl text-white text-sm border-2 border-white hover:bg-orange-700">Register Now</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide><div className="hero relative overflow-hidden rounded-lg bg-no-repeat text-center bg-[url('https://i.ibb.co/6r6B0Yb/davide-cantelli-e3-Uy4k7oo-Yk-unsplash.jpg')] h-[400px] lg:h-[600px] bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl">
                                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500">LibroHub: Your Library, Your Command Center</h1>
                                <p className="text-sm text-white my-2">An advanced system for easy library resource organization, lending, and tracking, enhancing operational efficiency and access.</p>
                                <Link to='/register'><button className="bg-orange-500 py-[4px] px-[13px] font-medium rounded-3xl text-white text-sm border-2  border-white hover:bg-orange-700">Register Now</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide><div className="hero relative overflow-hidden rounded-lg bg-no-repeat text-center bg-[url('https://i.ibb.co/5x4szYF/dmitrij-paskevic-Yj-Va-F9-P9kk-unsplash.jpg')] h-[400px] lg:h-[600px] bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl">
                                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500">ShelfSage: Organize, Borrow, and Explore Effortlessly</h1>
                                <p className="text-sm text-white my-2">An advanced system for easy library resource organization, lending, and tracking, enhancing operational efficiency and access.</p>
                                <Link to='/register'><button className="bg-orange-500 py-[4px] px-[13px] font-medium rounded-3xl text-white text-sm border-2 border-white hover:bg-orange-700">Register Now</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide><div className="hero relative overflow-hidden rounded-lg bg-no-repeat text-center bg-[url('https://i.ibb.co/VpJYVCS/kevin-laminto-h2-Vr-ZPWLh-IU-unsplash.jpg')] h-[400px] lg:h-[600px] bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl">
                                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500">LibraFlow: Simplify, Manage, and Thrive</h1>
                                <p className="text-sm text-white my-2">An advanced system for easy library resource organization, lending, and tracking, enhancing operational efficiency and access.</p>
                                <Link to='/register'><button className="bg-orange-500 py-[4px] px-[13px] font-medium rounded-3xl text-white text-sm border-2 border-white hover:bg-orange-700">Register Now</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide><div className="hero relative overflow-hidden rounded-lg bg-no-repeat text-center bg-[url('https://i.ibb.co/JnNY1Tb/redcharlie-v-Gb-C6m-Oe-UCw-unsplash.jpg')] h-[400px] lg:h-[600px] bg-cover">
                        <div className="flex justify-center items-center h-full w-full text-center bg-gradient-to-r from-[#125058c7] to-[rgba(21, 21, 21, 0.00)] absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed">
                            <div className="max-w-2xl">
                                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500">Streamlined Library Management System for Efficient Resource Control.</h1>
                                <p className="text-sm text-white my-2">An advanced system for easy library resource organization, lending, and tracking, enhancing operational efficiency and access.</p>
                                <Link to='/register'><button className="bg-orange-500 py-[4px] px-[13px] font-medium rounded-3xl text-white text-sm border-2 border-white hover:bg-orange-700">Register Now</button></Link>
                            </div>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Banner;