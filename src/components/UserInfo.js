import React from 'react';
import '../UserInfo.css'

const UserInfo = ({ user }) => {
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
                        <td>{user ? <button type="submit" className="connect-button">Connect</button> : ""}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserInfo;
