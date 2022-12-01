import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import client from '../lib/client.js';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';
import BlockContent from '../components/UI/BlockContent/BlockContent';
import Head from '../components/Head';

export default function PostPage() {
  const params = useParams();
  const [post, setPost] = useState({});

  const [fetchPostById, isLoading] = useFetching(async () => {
    const response = await PostService.getById(params.slug);
    setPost(response);
  });

  useEffect(() => {
    fetchPostById(params.slug);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const router = useNavigate();

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div>
      {post.title && <Head title={post.title} />}
      {isLoading ? (
        <Loader />
      ) : (
        <div className='single-post'>
          <div className='single-post__wraper'>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
