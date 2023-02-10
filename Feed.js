import React, { useState, useEffect } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import db from "./config";
// import { collection, doc } from "firebase/firestore"; 


function Feed() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   collection(db, doc)
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot((Snapshot) =>
  //       setPosts(Snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
  //     );
  // }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
