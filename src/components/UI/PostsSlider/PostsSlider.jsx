import React from 'react';
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import PostItem from '../../PostItem';

export default function PostsSlider({ posts }) {
  return (
    <div>
      <div className='single-post__category'>НОВОЕ</div>
      <Swiper
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination, Virtual]}
        spaceBetween={50}
        slidesPerView={3}
        virtual
        breakpoints={{ 320: { slidesPerView: 1 }, 780: { slidesPerView: 3 } }}>
        {posts.map((post, index) => (
          <SwiperSlide key={post._id} virtualIndex={index}>
            <PostItem number={post._id} post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
