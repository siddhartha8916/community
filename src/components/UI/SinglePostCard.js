import React from 'react'
import classes from './Card.module.css'

const SinglePostCard = (props) => {
  const styles = `${classes.singlepostcard} ${props.className}`;
  return <div className={styles}>
    {props.children}
  </div>
}

export default SinglePostCard
