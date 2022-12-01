import React, { useState, useEffect } from 'react';
import '../App.css';
import PostFilter from '../components/PostFilter';
import PostList from '../components/PostList';
import { usePosts } from '../hooks/usePost';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import { useLocation } from 'react-router-dom';
import Loader from '../components/UI/Loader/Loader';
import Head from '../components/Head';

function Category() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  let url = window.location.href.split('/');
  let lastSegment = url.pop() || url.pop();

  let categoryName = '';
  if (posts[0]) {
    categoryName = posts[0].category.name;
  }
  const [fetchPosts, isLoading] = useFetching(async () => {
    const response = await PostService.getAll();
    var result = response.filter(obj => {
      return obj.category.slug === lastSegment;
    });
    console.log(result);
    setPosts(result);
  });

  const location = useLocation();

  useEffect(() => {
    fetchPosts();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div>
      {categoryName && <Head title={categoryName} />}
      <div className='single-post__category'>{categoryName}</div>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList posts={sortedAndSearchedPosts} />
      {isLoading && <Loader />}
    </div>
  );
}

export default Category;
