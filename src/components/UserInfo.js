import React from 'react';
import '../UserInfo.css'

const config = require('../common/config.js');

const UserInfo = ({ user }) => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    const handleConnectClick = async (username) => {
        // Your logic for handling the button click goes here
        console.log("Connect button clicked!", username);
        // You can perform additional actions, such as making an API request or updating state.

        const res = await fetch(config.connectUrl, {
            method: "POST",
            body: JSON.stringify({"fromUserName": loggedInUser["userName"], "toUserName": username}), // Use formData instead of state
            //credentials: "include",
            headers: {
                "content-type": "application/json",
            },
        });

        if (res.ok) {
            const messageElement = document.getElementById('server_msg');
            if (messageElement) {
                messageElement.textContent = await res.text()
                messageElement.style.display = 'block';
                messageElement.style.color = 'green'
            }
        } else if (res.status === 400) {            
            const messageElement = document.getElementById('server_msg');
            if (messageElement) {
                messageElement.style.display = 'block';
                messageElement.textContent = await res.text()
                messageElement.style.color = 'orange'
            }
        }
        else {            
            const messageElement = document.getElementById('server_msg');
            if (messageElement) {
                messageElement.textContent = await res.text()
                messageElement.style.color = 'red'
            }
        }
    };

    return (
        <div>
            <table id="userTable">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user ? user["userName"] : ""}</td>
                        <td>{user ? user["firstName"] : ""}</td>
                        <td>{user ? user["lastName"] : ""}</td>
                        <td>{user ? user["city"] : ""}</td>
                        <td>{user ? user["state"] : ""}</td>
                        <td>{user ? user["country"] : ""}</td>
                        <td>{user ? <button type="submit" className="connect-button" onClick={() => handleConnectClick(user["userName"])}>Connect</button> : ""}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserInfo;
