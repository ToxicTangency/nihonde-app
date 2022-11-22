import React, { useState } from 'react'
import LikeButton from './UI/LikeButton/LikeButton'
import LikeCounter from './UI/LikeCounter/LikeCounter'
import { useNavigate } from 'react-router-dom'
import client from '../lib/client.js'
import imageUrlBuilder from '@sanity/image-url'

export default function PostItem(props) {
  const [like, setLike] = useState(props.post.likes)

  const [isLike, setIsLike] = useState(false)

  const addLike = () => {
    if (isLike) {
      setLike((props.post.likes -= 1))
      setIsLike(false)
      client.patch(props.post._id).dec({ likes: 1 }).commit()
    } else {
      setLike((props.post.likes += 1))
      setIsLike(true)
      client.patch(props.post._id).inc({ likes: 1 }).commit()
    }
  }

  const router = useNavigate()

  const builder = imageUrlBuilder(client)

  function urlFor(source) {
    return builder.image(source)
  }

  return (
    <div className={isLike ? 'post-card liked' : 'post-card'}>
      <LikeButton onClick={() => addLike()} likes={props.post.likes} />
      <div className='post-card__image'>
        <img
          onClick={() => router(`/posts/${props.post.id}`)}
          src={urlFor(props.post.image).url()}
          alt=''
        />
        <LikeCounter likes={props.post.likes} />
      </div>
      <div className='post-card__content'>
        <div
          className='single-post__category'
          onClick={() => router(`/category/${props.post.category}`)}>
          {props.post.category}
        </div>
        <div
          onClick={() => router(`/posts/${props.post.id}`)}
          className='single-post__title small'>
          {props.post.title}
        </div>
        <div className='single-post__author'>{props.post.author}</div>
      </div>
    </div>
  )
}
