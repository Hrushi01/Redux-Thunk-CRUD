import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddPost from "./pages/Posts/AddPost";
import Post from "./pages/Posts/Post";
import UpdatePost from "./pages/Posts/UpdatePost";
import { Provider } from "react-redux";
import store from "./redux/reducers/store";

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <Router>
          <div className="App  p-5">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/addPost" element={<AddPost />} />
              <Route exact path="/post/:id" element={<Post />} />
              <Route exact path="/updatePost/:id" element={<UpdatePost />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
