import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'

const styles = {
    fontSize: "20px",
    cursor: "pointer"
}

const LikeIcon = () => {
  return (
    <>
      <AiOutlineLike className={styles}/>
    </>
  )
}

export default LikeIcon
