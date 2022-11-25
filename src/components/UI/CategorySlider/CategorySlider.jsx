import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import cl from './style.module.css';

export default function CategorySlider({ categories }) {
  const uniqueCats = categories.filter((value, index) => {
    const _value = JSON.stringify(value);
    return (
      index ===
      categories.findIndex(obj => {
        return JSON.stringify(obj) === _value;
      })
    );
  });
  const router = useNavigate();
  return (
    <div>
      <div className='single-post__category'>Категории</div>
      <Swiper
        className={cl.categorySlider}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination, Virtual]}
        spaceBetween={50}
        slidesPerView={4}
        virtual
        breakpoints={{ 320: { slidesPerView: 2 }, 780: { slidesPerView: 4 } }}>
        {uniqueCats.map((category, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <div
              className={cl.categoryItem}
              onClick={() =>
                router(`/category/${category.postCategory.categorySlug}`)
              }>
              {category.postCategory.category}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
