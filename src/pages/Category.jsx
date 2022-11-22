import React, { useState, useEffect } from 'react'
import '../App.css'
import PostFilter from '../components/PostFilter'
import PostList from '../components/PostList'
import { usePosts } from '../hooks/usePost'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import { useLocation } from 'react-router-dom'
import Loader from '../components/UI/Loader/Loader'

function Category() {
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  let url = window.location.href.split('/')
  let lastSegment = url.pop() || url.pop()

  const [fetchPosts, isLoading] = useFetching(async () => {
    const response = await PostService.getAll()
    var result = response.filter(obj => {
      return obj.category === lastSegment
    })
    setPosts(result)
  })

  const location = useLocation()

  useEffect(() => {
    fetchPosts()
    window.scrollTo(0, 0)
    document.title = lastSegment + '  - NOICELAND'
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <div>
      <div className='single-post__category'>{lastSegment}</div>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList posts={sortedAndSearchedPosts} />
      {isLoading && <Loader />}
    </div>
  )
}

export default Category
