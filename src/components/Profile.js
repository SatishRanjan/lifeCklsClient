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
            <Link to="/editprofile" style={linkStyle}>
                <div className="tile">
                    <b>Edit Profile</b>
                </div>
            </Link>
            <Link to="/connect" style={linkStyle}>
                <div className="tile">
                    <b>Connect</b>
                </div>
            </Link>
            <Link to="/createstory" style={linkStyle}>
                <div className="tile">
                    <b>Create Story</b>
                </div>
            </Link>
            <Link to="/sendmessage" style={linkStyle}>
                <div className="tile">
                    <b>Send Message</b>
                </div>
            </Link>
            <Link to="/connections" style={linkStyle}>
                <div className="tile">
                    <b>Connections</b>
                </div>
            </Link>
            <Link to="/stories" style={linkStyle}>
                <div className="tile">
                    <b>Stories</b>
                </div>
            </Link>
            <Link to="/messages" style={linkStyle}>
                <div className="tile">
                    <b>Messages</b>
                </div>
            </Link>
            <Link to="/connectionrequests" style={linkStyle}>
                <div className="tile">
                    <b>Connection Requests</b>
                </div>
            </Link>
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
