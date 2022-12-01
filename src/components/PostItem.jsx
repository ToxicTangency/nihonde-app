import React from 'react';
import { useNavigate } from 'react-router-dom';
import client from '../lib/client.js';
import imageUrlBuilder from '@sanity/image-url';

export default function PostItem(props) {
  const router = useNavigate();

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div className='post-card'>
      <div className='post-card__image'>
        <img
          onClick={() => router(`/posts/${props.post.slug.current}`)}
          src={urlFor(props.post.image).url()}
          alt=''
        />
      </div>
      <div className='post-card__content'>
        <div
          className='single-post__category'
          onClick={() => router(`/category/${props.post.category.slug}`)}>
          {props.post.category.name}
        </div>
        <div
          onClick={() => router(`/posts/${props.post.slug.current}`)}
          className='single-post__title small'>
          {props.post.title}
        </div>
        <div className='single-post__author'>
          {props.post.date} {/*{props.post.author} */}
        </div>
      </div>
    </div>
  );
}
