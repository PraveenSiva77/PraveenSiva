import React from 'react';
import "./testimonials.css";
import { testimonialData } from '../myLinks';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section className="testimonial container section" id="testimonial">
        <h2 className="section__title">Testimonial</h2>
        <span className="section__subtitle">Clients Say</span>

        <Swiper className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}

        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}

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
        modules={[Autoplay, Pagination]}
        >
            {testimonialData.map(({id, image, title, description}) => {
                return (
                    <SwiperSlide className="testimonial__card" key={id}>
                        <img src={image} alt="" className="testimonial__img"/>

                        <h3 className="testimonial__name">{title}</h3>
                        <p className="testimonial__description">{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Testimonials