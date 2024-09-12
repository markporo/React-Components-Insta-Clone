import React from 'react';
import Post from './Post';
//import PostHeader from './PostHeader';
import './Posts.css';

const Posts = ({ likePost, posts, setLiked }) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  // const  { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {posts.map(eachPost => {
        return <Post post={eachPost} likePost={likePost} />
      })}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
