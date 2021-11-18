import React, { useState, useEffect } from "react";
import axios from "axios";
import SinglePost from "./SinglePost";
import styles from "./AllPosts.module.css";
import PostDetail from "./PostDetail";
import AllTags from "../Tags/AllTags";
import SinglePostCard from "../UI/SinglePostCard";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const loadPosts = async () => {
    const result = await axios.get("http://localhost:3001/posts");
    setPosts(result.data);
    setFilteredPosts(result.data)
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const onClickPost = (clickedPost) => {
    setSelectedPost(clickedPost);
  };

  const onSelectTag = (selectedTag) => {
    const _posts = [...posts];
    const result = _posts.filter((post)=> post.tags.find((tag)=>tag.id === selectedTag))
    setFilteredPosts(result);
  };


  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5 mb-5 g-4">
          <div className="col-lg-6 col-sm-12">
            <SinglePostCard>
              <AllTags onSelectTag={onSelectTag} />
              <div className={styles.posts}>
                {filteredPosts.length>0 ? filteredPosts.map((post) => (
                  <SinglePost
                    key={post.id}
                    id={post.id}
                    tags={post.tags}
                    title={post.title}
                    description={post.description}
                    likes={post.likes}
                    onClickPost={onClickPost}
                    post={post}
                    focused={post.id === selectedPost?.id}
                  />
                )) : <h5 className={styles.nopost}>No posts found</h5>}
              </div>
            </SinglePostCard>
          </div>

          <div className="col-lg-6 col-sm-12">
            {selectedPost && <PostDetail selectedPost={selectedPost}/>}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPosts;
