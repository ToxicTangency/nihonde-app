import React, { useState } from 'react';
import LikeButton from './UI/LikeButton/LikeButton';
import LikeCounter from './UI/LikeCounter/LikeCounter';
import { useNavigate } from 'react-router-dom';
import client from '../lib/client.js';
import imageUrlBuilder from '@sanity/image-url';

export default function PostItem(props) {
  // eslint-disable-next-line
  const [like, setLike] = useState(props.post.likes);

  const [isLike, setIsLike] = useState(false);

  const addLike = () => {
    if (isLike) {
      setLike((props.post.likes -= 1));
      setIsLike(false);
      client.patch(props.post._id).dec({ likes: 1 }).commit();
    } else {
      setLike((props.post.likes += 1));
      setIsLike(true);
      client.patch(props.post._id).inc({ likes: 1 }).commit();
    }
  };

  const router = useNavigate();

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div className={isLike ? 'single-post liked' : 'single-post'}>
      <div className='single-post__wraper'>
        <div id='like_button_container'></div>

        <div className='single-post__image'>
          {props.post.image && (
            <img
              onClick={() => router(`/posts/post-${props.post.id}`)}
              src={urlFor(props.post.image).url()}
              alt=''
            />
          )}
        </div>

        <div className='single-post__content'>
          <div
            className='single-post__category'
            onClick={() => router(`/category/${props.post.category.slug}`)}>
            {props.post.category.name}
          </div>

          <div
            className='single-post__title'
            onClick={() => router(`/posts/post-${props.post.id}`)}>
            {props.post.title}
          </div>

          <div className='single-post__author'>{props.post.date}</div>
          <div className='likes'>
            <LikeButton onClick={() => addLike()} />
            <LikeCounter likes={props.post.likes} />
          </div>
        </div>
      </div>
    </div>
  );
}
