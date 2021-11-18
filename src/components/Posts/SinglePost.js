import React from "react";
import Card from "../UI/Card";
import styles from "./SinglePost.module.css";
import ReportButton from "../UI/ReportButton";
import { FaRegBookmark } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import LikeIcon from "../UI/Buttons/LikeIcon";

const SinglePost = (props) => {
  return (
    <>
      <Card className={`${styles.card} ${props.focused ? styles.focus : ""}`}>
        <div>
          
          {props.tags.map((tag) => (
            <span className={styles.tag} style={{background:`${tag.color}`}} key={tag.id}>{tag.text}</span>
          ))}
        </div>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>
          {props.description.slice(0, 120)}
          <span>
            <button
              onClick={() => props.onClickPost(props.post)}
              className={styles.readmore}
            >
              ... more
            </button>
          </span>
        </div>
        <div className={styles["status-bar"]}>
          <LikeIcon/>
          <span className={styles["like-number"]}>{props.likes}</span>
          <div className={styles["report-section"]}>
            <span>
              <ReportButton/>
            </span>
            <FaRegBookmark className={styles.bookmark} />
            <FiShare2 className={styles.share} />
          </div>
        </div>
      </Card>
    </>
  );
};

export default SinglePost;
