import React from 'react'
import AddButton from './Buttons/AddButton'
import classes from './CommunityBar.module.css'

const CommunityBar = () => {
  return (
    <div className={classes.community}>
      <div className={classes.text}>Community</div>
      <AddButton
          type="submit"
          label="ADD NEW"
          onClick={() => {
            alert("Button Clicked");
          }}
        />
    </div>
  )
}

export default CommunityBar
