import React from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import Widget from './Widget.js';
import Login from './Login.js';
import { useStateValue } from './StateProvider';

// import { useStateValue } from './StateProvider';


function App() {
  
  const [{ user }, dispatch] = useStateValue();
  return (
    //Bem naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className='app__body'>
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      )}

    </div>

  )
}

export default App;

