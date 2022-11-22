import React, { useState, useEffect } from 'react'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'
import PostsSlider from '../components/UI/PostsSlider/PostsSlider'
import MainSlider from '../components/UI/MainSlider/MainSlider'
import CategorySlider from '../components/UI/CategorySlider/CategorySlider'

export default function Home() {
  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])

  const [fetchPosts, isLoading] = useFetching(async () => {
    const response = await PostService.getAll()
    setPosts(response)
  })

  const [fetchCategories] = useFetching(async () => {
    const response = await PostService.getCategories()
    setCategories(response)
  })

  useEffect(() => {
    fetchPosts()
    fetchCategories()
    document.title = 'Home - NOICELAND'
  }, [])

  return (
    <div className='homePage'>
      <MainSlider posts={posts} />
      <CategorySlider categories={categories} />
      <PostsSlider posts={posts} />
      {isLoading && <Loader />}
    </div>
  )
}
