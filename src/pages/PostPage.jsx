import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import client from '../lib/client.js';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';
import BlockContent from '../components/UI/BlockContent/BlockContent';
import LikeButton from '../components/UI/LikeButton/LikeButton';
import LikeCounter from '../components/UI/LikeCounter/LikeCounter';

export default function PostPage() {
  const params = useParams();
  const [post, setPost] = useState({});

  const [fetchPostById, isLoading] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response);
  });

  useEffect(() => {
    fetchPostById(params.id);
    window.scrollTo(0, 0);
    document.title = 'Post ' + params.id + '  - NOICELAND';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line
  const [like, setLike] = useState(post.likes);

  const [isLike, setIsLike] = useState(false);

  const addLike = () => {
    if (isLike) {
      setLike((post.likes -= 1));
      setIsLike(false);
      client.patch(post._id).dec({ likes: 1 }).commit();
    } else {
      setLike((post.likes += 1));
      setIsLike(true);
      client.patch(post._id).inc({ likes: 1 }).commit();
    }
  };

  const router = useNavigate();

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={isLike ? 'single-post liked' : 'single-post'}>
          <div className='single-post__wraper'>
            <div id='like_button_container'></div>

            <div className='single-post__image'>
              {post.image && <img src={urlFor(post.image).url()} alt='' />}
            </div>

            <div className='single-post__content'>
              <div
                className='single-post__category'
                onClick={() => router(`/category/${post.category.slug}`)}>
                {post.category && post.category.name}
              </div>

              <div className='single-post__title'>{post.title}</div>

              <div className='single-post__description'>
                <PortableText value={post.text} components={BlockContent} />
              </div>

              <div className='single-post__author'>{post.date}</div>
              <div className='likes'>
                <LikeButton onClick={() => addLike()} />
                <LikeCounter likes={post.likes} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
