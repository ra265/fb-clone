import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Post({ profilePic, image, username, timestamp, message }) {
    return (
      <div className="post">
        <div className="post-top">
          <Avatar src={profilePic} className="post-avatar" />
          <div className="post-topInfo">
            <h3>{username} </h3>
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          </div>
        </div>
  
        <div className="post-bottom">
          <p>{message}</p>
        </div>
  
        <div className="post-image">
          <img src={image} alt="" />
        </div>
  
        <div className="post-options">
          <div className="post-option">
            <ThumbUpIcon />
            <p>Like</p>
          </div>
          <div className="post-option">
            <ChatBubbleIcon />
            <p>Comment</p>
          </div>
          <div className="post-option">
            <NearMeIcon />
            <p>Share</p>
          </div>
          <div className="post-option">
            <AccountCircleIcon />
            <ExpandMoreOutlinedIcon/>
          </div>
        </div>
      </div>
    );
  }
  
  export default Post;
  