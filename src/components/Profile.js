import React from 'react';
//import { useState } from 'react';
import { Link } from 'react-router-dom';
import EditProfile from './EditProfile';
import Connect from './Connect';
import CreateStory from './CreateStory';
import SendMessage from './SendMessage';
import Connections from './Connections';
import Stories from './Stories';
import Messages from './Messages';
import ConnectionRequests from './ConnectionRequests';

// JSON.parse(localStorage.getItem("user"))["UserName"]
import "../Profile.css"

const LeftPane = () => {

    const linkStyle = {
        textDecoration: 'none', // Remove underline
        color: '#52595D',       // Inherit the color from the parent (you can customize this)
        cursor: 'pointer'       // Add a pointer cursor for better UX
      };

    return (
        <div className="left-pane">
            <div className="tile">
                <Link to="/editprofile" style={linkStyle}><b>Edit Profile</b></Link>
            </div>
            <div className="tile">
                <Link to="/connect" style={linkStyle}><b>Connect</b></Link>
            </div>
            <div className="tile">
                <Link to="/createstory" style={linkStyle}><b>Create Story</b></Link>
            </div>
            <div className="tile">
                <Link to="/sendmessage" style={linkStyle}><b>Send Message</b></Link>
            </div>
            <div className="tile">
                <Link to="/connections" style={linkStyle}><b>Connections</b></Link>
            </div>
            <div className="tile">
                <Link to="/stories" style={linkStyle}><b>Stories</b></Link>
            </div>
            <div className="tile">
                <Link to="/messages" style={linkStyle}><b>Messages</b></Link>
            </div>
            <div className="tile">
                <Link to="/connectionrequests" style={linkStyle}><b>Connection Requests</b></Link>
            </div>
        </div>
    );
};


const ProfilePage = (props) => {
    const user = JSON.parse(localStorage.getItem("user"));   
    /*const [username, setUsername] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
    };*/
   

    // Set the desired color for the username
    const usernameStyle = {
        color: 'green',
    };

    return (
        <div>
            <h1 className="center-text">Welcome <span style={usernameStyle}>"{user["userName"]}"</span> to your profile page, this page is still work in progress!</h1>
            <div className="page-container">
                <LeftPane />
                <div className="right-pane">
                    {props.showProfile && <EditProfile />}
                    {props.showConnect && <Connect />}
                    {props.showCreateStory && <CreateStory />}
                    {props.showSendMessage && <SendMessage />}
                    {props.showConnections && <Connections />}
                    {props.showStories && <Stories />}
                    {props.showMessages && <Messages />}
                    {props.showConnectionRequests && <ConnectionRequests />}
                </div>

                {/*<div>
                <div>
                    <h1 className="center-text">Welcome <span style={usernameStyle}>"{user["userName"]}"</span> to your profile page, this page is still work in progress!</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Search by user name:
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </label>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button type="submit">Search</button>
                        </div>
                    </form>
                </div>
            </div>*/}
            </div>
        </div>
    );
};

export default ProfilePage;
