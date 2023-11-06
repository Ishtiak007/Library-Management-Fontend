// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Testimonial.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonial = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold'>Our Regular reader about us</h1>
            <h2 className='text-center text-3xl font-bold'>. . . . . . . . </h2>
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
                    <SwiperSlide className='my-5'>
                        <div className="card bg-base-100 shadow-xl my-5">
                            <figure className="px-10 pt-10">
                                <div className="w-[100px] mx-auto">
                                    <img className="w-full rounded-full" src="https://i.ibb.co/nnhrQSb/istockphoto-1194667029-612x612.jpg" alt="" />
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Glenn Maxwell</h2>
                                <p className='text-gray-400'>❝The library is a treasure trove of knowledge and a <br /> peaceful sanctuary for book lovers. I love it!❞</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='my-5'>
                        <div className="card bg-base-100 shadow-xl my-5">
                            <figure className="px-10 pt-10">
                                <div className="w-[100px] mx-auto">
                                    <img className="w-full rounded-full" src="https://i.ibb.co/hVxXgTT/istockphoto-1319763895-612x612.jpg" alt="" />
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Virat Kohli</h2>
                                <p className='text-gray-400'>❝Extensive collection and helpful staff make this library a <br /> haven for readers. Highly recommended.❞</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='my-5'>
                        <div className="card bg-base-100 shadow-xl my-5">
                            <figure className="px-10 pt-10">
                                <div className="w-[100px] mx-auto">
                                    <img className="w-full rounded-full" src="https://i.ibb.co/LhWzc5b/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg" alt="" />
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Ms Dhoni</h2>
                                <p className='text-gray-400'>❝The library s ambiance and resources are top-notch. A perfect<br /> place to get lost in books.❞</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='my-5'>
                        <div className="card bg-base-100 shadow-xl my-5">
                            <figure className="px-10 pt-10">
                                <div className="w-[100px] mx-auto">
                                    <img className="w-full rounded-full" src="https://i.ibb.co/M1FkN99/istockphoto-1364917563-612x612.jpg" alt="" />
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Kl Rahul</h2>
                                <p className='text-gray-400'>❝Ive been a member for years, and its my go-to place for research<br /> and leisure reading. Outstanding.❞</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='my-5'>
                        <div className="card bg-base-100 shadow-xl my-5">
                            <figure className="px-10 pt-10">
                                <div className="w-[100px] mx-auto">
                                    <img className="w-full rounded-full" src="https://i.ibb.co/Bt1mLGd/360-F-224869519-a-Rae-Lneq-ALf-PNBzg0xx-MZXghtv-BXkf-IA.jpg" alt="" />
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">David Warner</h2>
                                <p className='text-gray-400'>❝The library s community events and diverse selection of books make<br /> it an invaluable local resource. Love it!❞</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='my-5'>
                        <div className="card bg-base-100 shadow-xl my-5">
                            <figure className="px-10 pt-10">
                                <div className="w-[100px] mx-auto">
                                    <img className="w-full rounded-full" src="https://i.ibb.co/fptVhbK/istockphoto-1147066751-612x612.jpg" alt="" />
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Steven Smith</h2>
                                <p className='text-gray-400'>❝This library is a true gem in our town. It s a welcoming space for all,<br /> and the book selection is fantastic.❞</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Testimonial;