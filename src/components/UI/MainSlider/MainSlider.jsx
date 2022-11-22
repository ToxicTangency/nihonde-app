import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import SinglePostItem from '../../SinglePostItem'

export default function MainSlider({ posts }) {
  const latestPosts = posts.slice(-3)
  return (
    <div className='mainSwiperWrapper'>
      <Swiper
        className='postsSwiper'
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}>
        {latestPosts.map((post, index) => (
          <SwiperSlide key={post.id} virtualIndex={index}>
            <SinglePostItem number={post.id} post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
