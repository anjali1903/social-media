import React, { useState, useEffect } from "react";
import ImageUpload from "./ImageUpload.js";
import "../static/assets/Posts.css";
import firebase from "firebase";
import { db } from "../firebase.js";
import Post from "./Post.js";
import { useHistory } from "react-router-dom";

function Posts({ user }) {
  const history = useHistory("");
  const [posts, setPosts] = useState([]);

  console.log(user);

  if (user === undefined) {
    history.push("/login");
  }

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="posts">
      <ImageUpload username={user?.displayName} />

      {posts.map(({ id, post }) => (
        <Post
          key={id}
          postId={id}
          origuser={user?.displayName}
          username={post.username}
          userId={user.uid}
          caption={post.caption}
          imageUrl={post.imageUrl}
          noLikes={post.noLikes}
        />
      ))}
    </div>
  );
}

export default Posts;
