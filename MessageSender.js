import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import './MessageSender.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './config';
import { initializeApp } from 'firebase/app';


function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      db.collection("posts").add({
        message: input,
        timestamp: initializeApp.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageUrl,
      });
  
      setInput("");
      setImageUrl("");
    };
  
    return (
      <div className="messageSender">
        <div className="messageSender-top">
          <Avatar src={user.photoURL} />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="messageSender-input"
              type="text"
              placeholder={`What's on your mind, ${user.displayName} ?`}
            />
            <input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              type="text"
              placeholder="image URL (Optional)"
              className="messageSender-imageInput"
            />
            <button onClick={handleSubmit} type="submit">
              Hidden Submit
            </button>
          </form>
        </div>
  
        <div className="messageSender-bottom">
          <div className="messageSender-option">
            <VideocamIcon style={{ color: "red" }} />
            <h3>Live Video</h3>
          </div>
  
          <div className="messageSender-option">
            <PhotoLibraryIcon style={{ color: "green" }} />
            <h3>Photo/Video</h3>
          </div>
  
          <div className="messageSender-option">
            <InsertEmoticonIcon style={{ color: "orange" }} />
            <h3>Feeling/Activity</h3>
          </div>
        </div>
      </div>
    );
  }
  
  export default MessageSender;
  