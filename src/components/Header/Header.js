import React, { Fragment } from "react";
import styles from "./Header.module.css";
import {AiOutlineSearch} from 'react-icons/ai';
import {MdNotificationsNone} from 'react-icons/md'
import avatar from '../Avatar/woman.jpg'

const Header = () => {
  return (
    <Fragment>
      <div className={styles["header-container"]}>
        <div className={styles.searchbar}>
        <AiOutlineSearch className={styles.icon}/>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for patients, tests, doctors..."
        />
        </div>
        <div className={styles["notification-avatar"]}>
          <div className={styles.notification}><MdNotificationsNone/></div>
          <div className={styles.avatar}><img src={avatar} alt="avatar"/></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
