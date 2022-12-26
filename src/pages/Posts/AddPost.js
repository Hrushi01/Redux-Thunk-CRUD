import React, { useState } from "react";
import shortid from "shortid";
import { createPost } from "../../redux/actions/postAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const new_post = {
      id: shortid.generate(),
      title: title,
      body: body,
    };

    dispatch(createPost(new_post));
    navigate("/");
  };
  return (
    <div className="     ">
      <div className="py-4 w-full flex justify-center text-center ">
        <div className="card shadow-xl w-1/2 rounded-xl ">
          <div className="card-header p-2 bg-slate-200 rounded-xl">
            Add A Post
          </div>
          <div className="card-body p-1">
            <form onSubmit={submitForm}>
              <div className="form-group p-2">
                <input
                  type="text"
                  className="p-1 outline-double w-full rounded-xl "
                  placeholder="Enter Post Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group p-2">
                <textarea
                  rows="5"
                  className="form-control form-control-lg outline-double w-full p-1 rounded-xl"
                  placeholder="Enter Post Body Text"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}></textarea>
              </div>
              <div className="flex justify-center text-center">
                <button type="submit" className="bg-orange-400 p-2 ">
                  Add New Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
