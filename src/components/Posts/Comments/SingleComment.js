import React from "react";
import styles from "./SingleComment.module.css";
import avatar from "../../Avatar/woman.jpg";
import { AiOutlineDislike } from "react-icons/ai";
import { HiOutlineReply } from "react-icons/hi";
import ReportButton from "../../UI/ReportButton";
import LikeIcon from "../../UI/Buttons/LikeIcon";
import DislikeIcon from "../../UI/Buttons/DislikeIcon";

const SingleComment = (props) => {
  return (
    <>
    <div className={styles['comment-card']}>
      <div className={styles["comment-details-group"]}>
        <div className={styles["comment-name-image"]}>
          <img className={styles.image} src={avatar} alt="avatar" />
          <div className={styles.name}>{props.name}</div>
        </div>
        <div className={styles.date}>{props.date}</div>
      </div>
      <div className={styles.description}>{props.comment}</div>
      <div className={styles["status-bar"]}>
        <LikeIcon/>
        <span className={styles["like-number"]}>{props.likes}</span>
        <DislikeIcon/>
        <span className={styles["dislike-number"]}>{props.dislikes}</span>
        <span className={styles.reply}>
          <HiOutlineReply />
        </span>
        <span className={styles["reply-number"]}>{props.replies}</span>
        <span>
          <ReportButton/>
        </span>
      </div>
      </div>
    </>
  );
};

export default SingleComment;
