import React from "react";
import SingleComment from "./SingleComment";

const ListComments = (props) => {
  return (
    <div style={{marginTop:"20px"}}>
      {props.comments.map((comment) => (
        <SingleComment
          key={comment.id}
          id={comment.id}
          name={comment.doneby}
          comment={comment.comment}
          date={comment.date}
          likes={comment.likes}
          dislikes={comment.dislikes}
        />
      ))}
    </div>
  );
};

export default ListComments;
