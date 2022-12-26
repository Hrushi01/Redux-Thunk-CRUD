import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/actions/postAction";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-5">
      {posts.map((postItem) => (
        <PostCard key={postItem.id} postItem={postItem} />
      ))}
    </div>
  );
};

export default Posts;
