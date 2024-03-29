import React from 'react'
import "./testmonials.css";
import { Data } from "./Data";


// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/modules/pagination/pagination.min.css'


const Testmonials = () => {
  return (
    
    <section className="testimonial container section">
        <h2 className="section__title">My Clients Say</h2>
        <span className="section__subtitle">Testmonials</span>
        <Swiper className="testimonial__container"
           loop={true}
           grabCursor={true}
           spaceBetween={24}
           pagination={{
             clickable: true,
           }}
           breakpoints={{
             576: {
               slidesPerView: 2,
             },
             768: {
               slidesPerView: 2,
               spaceBetween: 48,
             },
           }}
           modules={[Pagination]}
        >
            {Data.map(({id, image, title, description}) => {
                  return (
                    <SwiperSlide className="testimonial__card" key={id}>
                        <img src={image} alt=""
                         className="testimonial__img" />
                         <h3 className="testimonial__name">{title}</h3>
                         <p className="testimonial__description">{description}</p>

                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  );
};

export default Testmonials
