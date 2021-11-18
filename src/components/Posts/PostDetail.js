import React from 'react'
import SinglePostCard from '../UI/SinglePostCard'
import styles from './PostDetail.module.css'
import avatar from '../Avatar/woman.jpg'
import { FaRegBookmark } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { BsChat } from "react-icons/bs";
import AddComment from './Comments/AddComment';
import ReportButton from '../UI/ReportButton';
import LikeIcon from '../UI/Buttons/LikeIcon';
import DislikeIcon from '../UI/Buttons/DislikeIcon';

const PostDetail = (props) => {
  const name = props.selectedPost.createdby[0].name
  const position = props.selectedPost.createdby[0].position
  return (
    <div>
      <SinglePostCard>
        <div>
        {props.selectedPost.tags.map((tag) => (
            <span className={styles.tag} style={{background:`${tag.color}`}} key={tag.id}>{tag.text}</span>
          ))}
        </div>
        <div className={styles.title}>{props.selectedPost.title}</div>
        <div className={styles.answers}>{props.selectedPost.answers.length} Answers</div>
        <div className={styles['name-container']}>
          <div className={styles.det}>
            <img className={styles.image} src={avatar} alt=""/>
            <div className={styles['name-position']}>
              <div className={styles.name}>{name}</div>
              <div className={styles.position}>{position}</div>
            </div>
          </div>
            <div className={styles.date}>{props.selectedPost.date}</div>
        </div>
        <div className={styles.description}>
          {props.selectedPost.description}
        </div>
        <div className={styles["status-bar"]}>
          <LikeIcon/>
          <span className={styles["like-number"]}>{props.selectedPost.likes}</span>
          <DislikeIcon/>
          <span className={styles["dislike-number"]}>{props.selectedPost.dislikes}</span>
          <span className={styles.comment}>
            <BsChat />
          </span>
          <span className={styles["comment-number"]}>{props.selectedPost.comments.length}</span>
          <div className={styles["report-section"]}>
            <span>
              <ReportButton/>
            </span>
            <FaRegBookmark className={styles.bookmark} />
            <FiShare2 className={styles.share} />
          </div>
        </div>
        <AddComment comments={props.selectedPost.comments}/>
      </SinglePostCard>
    </div>
  )
}

export default PostDetail
