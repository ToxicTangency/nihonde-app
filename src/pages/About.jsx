import React, { useState, useEffect } from 'react'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'
import client from '../lib/client.js'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import BlockContent from '../components/UI/BlockContent/BlockContent'

export default function About() {
  const [about, setAbout] = useState([])

  const [fetchAbout, isLoading] = useFetching(async () => {
    const response = await PostService.getAbout()
    setAbout(response[0])
  })

  useEffect(() => {
    fetchAbout()
    document.title = 'About - NOICELAND'
  }, [])

  const builder = imageUrlBuilder(client)

  function urlFor(source) {
    return builder.image(source)
  }

  return (
    <div className='aboutPage'>
      <div className='single-post__title'>{about.title}</div>
      <div className='single-post__category'>{about.phrase}</div>
      {about.image && <img src={urlFor(about.image).url()} alt='' />}
      <div className='single-post__description'>
        <PortableText value={about.text} components={BlockContent} />
      </div>
      <div className='single-post__author'>{about.authors}</div>
      {isLoading && <Loader />}
    </div>
  )
}
