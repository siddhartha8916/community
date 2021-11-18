import React from 'react'
import { AiOutlineDislike } from 'react-icons/ai'

const styles = {
    marginLeft: "15px",
    fontSize: "20px",
    cursor: "pointer",
}

const DislikeIcon = () => {
  return (
    <div>
      <AiOutlineDislike className={styles}/>
    </div>
  )
}

export default DislikeIcon
