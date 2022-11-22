import React from 'react'
import classes from './LikeButton.module.css'
export default function LikeButton(props) {
  return (
    <span {...props} className={classes.thumbUp}>
      thumb_up
    </span>
  )
}
