import { useMemo } from 'react';

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort === 'date') {
      return [...posts]
        .sort((a, b) => a[sort].localeCompare(b[sort]))
        .reverse();
    }
    if (sort === 'likes') {
      return [...posts].sort((a, b) => a[sort] - b[sort]).reverse();
    }
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(
      post =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.category.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
