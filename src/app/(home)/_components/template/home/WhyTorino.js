"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards,Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/pagination';
// import required modules


function WhyTorino() {
  return (
    <div className="mt-8 container mx-auto  p-4 md:flex md:gap-8 md:justify-center  ">
      <div className="  md:basis-2/5 lg:mt-8 ">
        <div className="flex gap-2 items-center justify-center md:justify-start">
          <div className=" bg-gradient-to-r from-[#28A745] to-[#10411B]  rounded-full w-[30px] h-[30px] flex justify-center item-center md:w-[50px] md:h-[50px] ">
            <span className=" text-xl md:text-[32px] text-white mt-1 md:mt-4">?</span>
          </div>
          <div className="text-2xl   md:text-[40px] font-bold ">
            <span>چرا</span>
            <span className="text-[#28A745] px-2">تورینو</span>
            <span>؟</span>
          </div>
        </div>

        <h3 className=" hidden md:block text-2xl font-medium my-4">تور طبیعت گردی و تاریخی </h3>
        <p className=" hidden md:block text-[20px] font-light  text-justify text-[#282828] lg:leading-8">
          اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
          طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
          طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
          آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی
          را خریداری کنید.
        </p>
      </div>
      <div className="basis-0  md:basis-3/5  mt-8 md:mt-0 ">
        <Swiper
         modules={[EffectCards, Pagination]}
          effect="cards"
          grabCursor={true}
        //  style={{ width: "39px", height: "489px"}}
         className="w-[334px] h-[386px] lg:w-[389px] lg:h-[479px]"
          cardsEffect={{
            rotate: false,
            perSlideRotate: 2,
            perSlideOffset: 12,
            slideShadows: false,
            
          }}
          pagination={{
            clickable: true,
            type: 'bullets', // 'bullets', 'fraction', 'progressbar', or custom
          }}
          
          
        >
          {/* <SwiperSlide className=" ">
            <img src="/images/s1.png" className="w-full h-full " />
          </SwiperSlide>
          <SwiperSlide className="    ">
            <img src="/images/s2.png" className="w-full h-full" />
          </SwiperSlide>
          <SwiperSlide className="  ">
            <img src="/images/s4.png" className=" w-[220px] h-[350px]   " />
          </SwiperSlide>
          <SwiperSlide className=" ">
            <img src="/images/s3.png" className=" w-[200px] h-[300px]   " />
          </SwiperSlide> */}


           <SwiperSlide className="   ">
            <img src="/images/slide1.jpg" className="w-[250px] h-[280px] lg:w-[300px] lg:h-[400px] rounded-3xl object-cover" />
          </SwiperSlide>
          <SwiperSlide className="   ">
            <img src="/images/slide2.jpg" className="w-[250px] h-[280px] lg:w-[300px] lg:h-[400px]  object-cover rounded-3xl" />
          </SwiperSlide>
          <SwiperSlide className="  ">
            <img src="/images/slide3.jpg" className="w-[250px] h-[280px] lg:w-[300px] lg:h-[400px] object-cover rounded-[30px]" />
          </SwiperSlide>
          <SwiperSlide className="  ">
            <img src="/images/slide4.jpg" className="w-[250px] h-[280px] lg:w-[300px] lg:h-[400px] object-cover rounded-[30px]" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default WhyTorino;
//<img src="/images/slide2.jpg" className="object-cover" />