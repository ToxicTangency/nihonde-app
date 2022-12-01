import React from 'react';
import { useNavigate } from 'react-router-dom';
import client from '../lib/client.js';
import imageUrlBuilder from '@sanity/image-url';
import MyButton from './UI/button/MyButton.jsx';

export default function PostItem(props) {
  const router = useNavigate();

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  const background = urlFor(props.post.image).url();
  const postStyle = {
    backgroundImage: `url(${background})`,
  };

  return (
    <div className='single-post' style={postStyle}>
      <div className='single-post__wraper'>
        <div className='single-post__content'>
          <div
            className='single-post__title'
            onClick={() => router(`/posts/${props.post.slug.current}`)}>
            {props.post.title}
          </div>

          <div
            className='single-post__category'
            onClick={() => router(`/category/${props.post.category.slug}`)}>
            {props.post.category.name}
          </div>
          <MyButton onClick={() => router(`/posts/${props.post.slug.current}`)}>
            Перейти
          </MyButton>
          {/* <div className='single-post__author'>{props.post.date}</div> */}
        </div>
      </div>
    </div>
  );
}
