import React from "react";
import styles from "./AddComment.module.css";
import avatar from "../../Avatar/woman.jpg";
import ListComments from "./ListComments";

const AddComment = (props) => {
  return (
    <>
      <div className={styles["comment-group"]}>
        <div className={styles["comment-input-group"]}>
          <img className={styles.image} src={avatar} alt="avatar" />
          <input type="text" />
        </div>
        <div>
          <button className={styles["comment-button"]}>Add Comment...</button>
        </div>
      </div>
      <div>
        <ListComments comments={props.comments}/>
      </div>
    </>
  );
};

export default AddComment;
