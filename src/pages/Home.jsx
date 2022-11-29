import React, { useState, useEffect } from 'react';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import PostsSlider from '../components/UI/PostsSlider/PostsSlider';
import MainSlider from '../components/UI/MainSlider/MainSlider';
import CategorySlider from '../components/UI/CategorySlider/CategorySlider';
import { useSortedPosts } from '../hooks/usePost';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [filter] = useState({ sort: 'date' });

  const sortedPosts = useSortedPosts(posts, filter.sort);

  const [fetchPosts, isLoading] = useFetching(async () => {
    const response = await PostService.getAll();
    setPosts(response);
  });

  const [fetchCategories] = useFetching(async () => {
    const response = await PostService.getCategories();
    setCategories(response);
  });

  useEffect(() => {
    fetchPosts();
    fetchCategories();
    document.title = 'Home - NOICELAND';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='homePage'>
      <MainSlider posts={posts} />
      <CategorySlider categories={categories} />
      <PostsSlider posts={sortedPosts} />
      {isLoading && <Loader />}
    </div>
  );
}
