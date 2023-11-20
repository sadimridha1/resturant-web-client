import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className='mb-24'>
           <SectionTitle
             subHeading={"From 11:00am to 10:00pm"}
             heading={"ORDER ONLINE"}
           ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='rounded-md' src={slider1} alt="" />
                    <h1 className='text-xl md:text-4xl text-white text-center -mt-16'>Salads</h1>
                </SwiperSlide>

                <SwiperSlide>
                    <img className='rounded-md' src={slider2} alt="" />
                    <h1 className='text-xl md:text-4xl text-white text-center -mt-20'>Pizza</h1>
                </SwiperSlide>

                <SwiperSlide>
                    <img className='rounded-md' src={slider3} alt="" />
                    <h1 className='text-xl md:text-4xl text-white text-center -mt-20'>Soups</h1>
                </SwiperSlide>

                <SwiperSlide>
                    <img className='rounded-md' src={slider4} alt="" />
                    <h1 className='text-xl md:text-4xl text-white text-center -mt-20'>Desserts</h1>
                </SwiperSlide>

                <SwiperSlide>
                    <img className='rounded-md' src={slider5} alt="" />
                    <h1 className='text-xl md:text-4xl text-white text-center -mt-20'>Salads</h1>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;