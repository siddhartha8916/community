import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleTag from "./SingleTag";
import classes from "./AllTags.module.css";

const AllTags = (props) => {
  const [tags, setTags] = useState([]);

  const loadTags = async () => {
    const result = await axios.get("http://localhost:3001/tags");
    setTags(result.data);
  };

  useEffect(() => {
    loadTags();
  }, []);

  const onSelectTag = (clickedTag) => {
    props.onSelectTag(clickedTag)
  }


  return (
    <>
      <div className={classes['tag-container']}>
        <div className={classes["tag-text"]}>TAGS</div>
        <div className={classes.alltags}>
          {tags.map((tag) => (
            <SingleTag
              key={tag.id}
              id={tag.id}
              text={tag.text}
              color={tag.color}
              onSelectTag={onSelectTag}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllTags;
