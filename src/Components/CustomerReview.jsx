
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import member1 from '../assets/Customer/member1.png'
import member2 from '../assets/Customer/member2.png'
import member3 from '../assets/Customer/member3.png'
import member4 from '../assets/Customer/member4.png'

import { Pagination, Autoplay, FreeMode, Scrollbar } from 'swiper/modules';

const CustomerReview = () => {
    return (
        <div className='my-10 '>
            <h2 className='text-center text-3xl md:text-5xl font-bold'>Our <span className='text-rose-800'>Community</span> Says</h2>
            <div className='bg-gradient-to-r from-[#688ea8] to-[#172935] rounded-lg my-10 py-5 px-4'>
                <Swiper
                    slidesPerView={'1'}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 90 },
                        1024: { slidesPerView: 3, spaceBetween: 80 },
                    }}

                    // spaceBetween={50}
                    autoplay={true}
                    pagination={{
                        clickable: true,
                    }}
                    freeMode
                    centeredSlides
                    grabCursor
                    centeredSlidesBounds
                    modules={[Pagination, Autoplay, FreeMode, Scrollbar]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card bg-base-100 shadow-xl space-y-5 ">
                            <p className='text-lg font-medium px-4'>Meal Miracle has revolutionized the way we think about food sharing. I am continuously amazed by the number of generous people using this app. It is not just about free food; it is about creating a stronger, more connected community.</p>
                            <div className='flex  items-center gap-3'>
                                <img src={member1} alt="Shoes" className="rounded-full w-20" />
                                <h3 className='text-rose-800 text-xl font-bold'>Md Shojib Hossain</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100 shadow-xl space-y-5 ">
                            <p className='text-lg font-medium px-4'>Meal Miracle restores faith in humanity. I have had the privilege of both giving and receiving meals through this app. Kudos to the team behind Meal Miracle for making the world a better place.Really Appresiet!!!</p>
                            <div className='flex  items-center gap-3'>
                                <img src={member2} alt="Shoes" className="rounded-full w-20" />
                                <h3 className='text-rose-800 text-xl font-bold'>Mohsena Yeasmin</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100 shadow-xl space-y-5 ">
                            <p className='text-lg font-medium px-4'>As someone passionate about reducing food waste, Meal Miracle is a dream come true.It is a win-win for everyone involved. I highly recommend this app to anyone who believes in the power of community and compassion.</p>
                            <div className='flex  items-center gap-3'>
                                <img src={member3} alt="Shoes" className="rounded-full w-20" />
                                <h3 className='text-rose-800 text-xl font-bold'>Masum Billa</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100 shadow-xl space-y-5 ">
                            <p className='text-lg font-medium px-4'>Meal Miracle has revolutionized the way we think about food sharing. I am continuously amazed by the number of generous people using this app. It is not just about free food; It is about creating a stronger, more connected community.
                            </p>
                            <div className='flex  items-center gap-3'>
                                <img src={member4} alt="Shoes" className="rounded-full w-20" />
                                <h3 className='text-rose-800 text-xl font-bold'>Mst Asha Khatun</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100 shadow-xl space-y-5 ">
                            <p className='text-lg font-medium px-4'>Meal Miracle is a blessing. It is not just an app; It is a movement that promotes kindness and generosity. I have received delicious meals from local neighbors, and the sense of community is heartwarming.</p>
                            <div className='flex  items-center gap-3'>
                                <img src={member1} alt="Shoes" className="rounded-full w-20" />
                                <h3 className='text-rose-800 text-xl font-bold'>Niloy Das</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100 shadow-xl space-y-5 ">
                            <p className='text-lg font-medium px-4'>I can not express how much I love Meal Miracle. It beautifully blends technology and compassion. The interface is clean and easy to navigate.Thanks to Meal Miracle, I have made new friends and shared countless meals.</p>
                            <div className='flex  items-center gap-3'>
                                <img src={member2} alt="Shoes" className="rounded-full w-20" />
                                <h3 className='text-rose-800 text-xl font-bold'>Lucky Khatun</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100  shadow-xl space-y-5 ">
                            <p className='text-lg font-medium px-4'>As someone who is always been passionate about reducing food waste. It is a win-win for everyone involved. I highly recommend this app to anyone who believes in the power of community and compassion</p>
                            <div className='flex  items-center gap-3'>
                                <img src={member3} alt="Shoes" className="rounded-full w-20" />
                                <h3 className='text-rose-800 text-xl font-bold'>Aowal Hossain</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
};

export default CustomerReview;
