import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { MessageArea } from "../common/uimessagearea.js";
import UserInfo from "./UserInfo.js";

const config = require('../common/config.js');

const CenteredDiv = styled.div`
  text-align: center;
  font-size: 1em;
`;

const Connect = () => {
    const [username, setUsername] = useState('');
    const [user, setUserData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(config.getUserByName + username, {
            method: "GET",
            //credentials: "include",
            headers: {
                "content-type": "application/json",
            },
        });

        if (res.ok) {
            var user = await res.json()
            setUserData(user);
            console.log(JSON.stringify(user));
            const messageElement = document.getElementById('server_msg');
            if (messageElement) {
                messageElement.style.display = 'none';
            }
        } else if (res.status == 404) {
            setUserData(null);
            const messageElement = document.getElementById('server_msg');
            if (messageElement) {
                messageElement.style.display = 'block';
                messageElement.textContent = "User not found"
                messageElement.style.color = 'orange'
            }
        }
        else {
            setUserData(null);
            const messageElement = document.getElementById('server_msg');
            if (messageElement) {
                messageElement.textContent = JSON.stringify(await res.json())
                messageElement.style.color = 'red'
            }
        }
    };

    return (
        <CenteredDiv>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        User Name:
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button type="submit">Search</button>
                    </div>
                </form>
            </div>
            <MessageArea></MessageArea>
            <br></br>
            <div>
                <UserInfo user={user} />
            </div>
        </CenteredDiv>
    );
};

export default Connect;
