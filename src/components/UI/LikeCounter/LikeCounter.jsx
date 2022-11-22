import React from 'react'
import classes from './LikeCounter.module.css'
export default function LikeCounter(post) {
  return <span className={classes.likeCounter}>{post.likes}</span>
}
