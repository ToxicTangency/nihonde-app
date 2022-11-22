import React, { useState, useEffect } from 'react'
import '../App.css'
import PostFilter from '../components/PostFilter'
import PostList from '../components/PostList'
import { usePosts } from '../hooks/usePost'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'

function Posts() {
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isLoading] = useFetching(async () => {
    const response = await PostService.getAll()
    setPosts(response)
  })

  useEffect(() => {
    fetchPosts()
    window.scrollTo(0, 0)
    document.title = 'Posts - NOICELAND'
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className='single-post__category'>Новое</div>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList posts={sortedAndSearchedPosts} />
      {isLoading && <Loader />}
    </div>
  )
}

export default Posts
