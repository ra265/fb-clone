import React, { useEffect } from 'react'
import './Feed.css'
import StoryReel from './StoryReel.js'
import MessageSender from './MessageSender.js'
import Post from './Post.js'
import { useState } from 'react'
import db from './config'


function Feed() {
  const [posts, setPosts] = useState([])

  //Real time database in 3 line
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    })
  }, [])

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      {posts.map(post => {
        <Post 
        key={post.id}
        profilePic={post.profilePic}
        message={post.message}
        timestamp={post.timestamp}
        username={post.username}
        image={post.image}
        />
      })}
    </div>
  )
}

export default Feed