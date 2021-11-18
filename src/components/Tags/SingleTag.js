import React from "react";
import styles from "./SingleTag.module.css";

const SingleTag = (props) => {
  const selectedColor = props.color;

  return (
    <>
      <span
        className={styles.tag}
        style={{ background: `${selectedColor}` }}
        onClick={() => props.onSelectTag(props.id)}
      >
        {props.text}
      </span>
    </>
  );
};

export default SingleTag;
