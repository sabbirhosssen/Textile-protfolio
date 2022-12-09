import React from 'react';

// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//import slide image
import bannar_1 from "./../Images//bannar-1.jpeg";

const Slider = () => {
    return (
      <div>
       
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="h-screen w-full m-0 p-0"
          >
          <SwiperSlide>
            <img className='w-screen ' src={bannar_1} alt=""  />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-screen ' src="https://www.logodesignworks.com/wp-content/uploads/2021/10/hiker-clothing-brand-0a.jpg" alt="" />
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-screen ' src="https://www.logodesignworks.com/wp-content/uploads/2021/10/hiker-clothing-brand-0a.jpg" alt=""  />
          </SwiperSlide>
         
           
            
            ...
          </Swiper>
          
        </div>
    );
};

export default Slider;