import React, {Fragment} from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs';
import styles from './AddButton.module.css'

const AddButton = (props) => {
  return (
    <Fragment>
      <button className={styles.button} type={props.type} onClick={props.onClick}><BsFillPlusCircleFill className={styles.icon}/>{props.label}</button>
    </Fragment>
  )
}

export default AddButton
