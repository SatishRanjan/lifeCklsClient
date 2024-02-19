import React from 'react';
// JSON.parse(localStorage.getItem("user"))["UserName"]

const ProfilePage = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    // Set the desired color for the username
    const usernameStyle = {
        color: 'green',
    };
    
    return (
        <div>
            <h1 className="center-text">Welcome <span style={usernameStyle}>"{JSON.parse(localStorage.getItem("user"))["userName"]}"</span> to your profile page, this page is still work in progress!</h1>            
        </div>
    );
};

export default ProfilePage;
