import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = ({ likePost, posts }) => {
  // Make sure the parent of Posts is passing the right props!
 
  return (
    <div className="posts-container-wrapper">
      {/* map through the posts here to return a Post component */}
      {posts.map( post => {
        return <Post post={post} likePost={likePost} key={post.id}/>
      })}
      
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
