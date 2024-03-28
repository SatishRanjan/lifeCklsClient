import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../UserInfo.css'

const config = require('../common/config.js');

const Connections = () => {
  const [connections, setConnections] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {

        var url = config.connectionsUrl.replace("{username}", (JSON.parse(localStorage.getItem("user")))["userName"]);
        console.log("connections url=" + url)
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setConnections(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors, e.g., set an error state
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Connections</h2>
      <table id="userTable">
        <thead>
          <tr>
            <th>User Name</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {connections.map(connection => (
            <tr key={connection.profileId}>
              <td>{connection.userName}</td>
              <td>{connection.firstName}</td>
              <td>{connection.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Connections;
