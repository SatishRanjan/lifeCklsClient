import React from 'react';
//import { useState } from 'react';
import { Link } from 'react-router-dom';

// JSON.parse(localStorage.getItem("user"))["UserName"]
import "../Profile.css"

const LeftPane = () => {
    return (
        <div className="left-pane">
            <div className="tile">
                <Link to="/editprofile"><b>Edit Profile</b></Link>
            </div>
            <div className="tile">
                <Link to="/connect"><b>Connect</b></Link>
            </div>
            <div className="tile">
                <Link to="/createstory"><b>Create Story</b></Link>
            </div>
            <div className="tile">
                <Link to="/sendmessage"><b>Send Message</b></Link>
            </div>
            <div className="tile">
                <Link to="/connections"><b>Connections</b></Link>
            </div>
            <div className="tile">
                <Link to="/stories"><b>Stories</b></Link>
            </div>
            <div className="tile">
                <Link to="/messages"><b>Messages</b></Link>
            </div>
            <div className="tile">
                <Link to="/connectionrequests"><b>Connection Requests</b></Link>
            </div>
        </div>
    );
};

const RightPane = () => {
    return (
        <div className="right-pane">           
        </div>
    );
};

const ProfilePage = () => {
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
                <RightPane />

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
