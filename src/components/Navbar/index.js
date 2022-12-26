import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-orange-500  p-2">
      <div className="container flex justify-evenly text-white ">
        <Link className="text-2xl" to="/">
          Redux Posts
        </Link>

        <div className="flex text-white ">
          <div class="navbar-nav mr-auto flex justify-between  ">
            <div class="active flex justify-around w-44  ">
              <Link className="text-2xl" to="/">
                Home
              </Link>
            </div>
          </div>
        </div>
        <Link
          to="/addPost"
          className="mr-1 bg-black w-fit h-fit p-2  text-white rounded-lg">
          Add Posts
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
