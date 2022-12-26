import React from "react";
import { deletePost } from "../../redux/actions/postAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import EllipsisText from "react-ellipsis-text";
const PostCard = ({ postItem }) => {
  const dispatch = useDispatch();
  return (
    <div className="  mb-4">
      <div className="card custom-card relative mb-5 h-full  w-64 border-black border-solid border-2  flex flex-col  text-center p-1">
        <img
          src={`https://source.unsplash.com/collection/${postItem.id}/1600x900`}
          alt={postItem.title}
          className="card-img-top"
        />
        <Link
          to={`/updatePost/${postItem.id}`}
          className="btn btn-danger btn-edit bg-yellow-300 -top-4 p-1 -left-4  transition-all w-10 h-10 absolute rounded-full inline-flex text-center">
          <span class="material-icons">edit</span>
        </Link>
        <button
          className="btn btn-danger btn-delete bg-yellow-300 -top-4 p-1 -right-4 transition-all w-10 h-10 absolute rounded-full inline-flex text-center "
          onClick={() => dispatch(deletePost(postItem.id))}>
          <span class="material-icons">del</span>
        </button>
        <div className="card-body ">
          <h6 className="text-secondary font-serif font-semibold ">
            {postItem.title}
          </h6>
          <EllipsisText text={postItem.body} length={"100"} />
        </div>
        <div>
          <div className="card-footer bg-slate-200p-1  h-12 relative flex justify-center text-center bottom-1">
            <Link
              to={`/post/${postItem.id}`}
              className="btn btn-primary bg-orange-400 p-2 absolute ">
              <span className="left-4 "> read more {">"}</span>
              {/* <span class="material-icons">keyboard_arrow_right</span> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
