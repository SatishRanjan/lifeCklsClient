import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../UserInfo.css'
import { MessageArea } from "../common/uimessagearea.js";

const config = require('../common/config.js');

const Connections = () => {
  const [connections, setConnections] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);

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
        console.log("connections=" + JSON.stringify(data))
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors, e.g., set an error state
      }
    };

    fetchData();
  }, []);

  const handleAccept = async (storyId) => {
    // Implement your accept logic here
    console.log("Accepted story with ID:", storyId);
    console.log(JSON.parse(localStorage.getItem("user")))

    const data = {
      storyId: storyId,
      userName: (JSON.parse(localStorage.getItem("user")))["userName"],
      firstName: (JSON.parse(localStorage.getItem("user")))["firstName"],      
      lastName: (JSON.parse(localStorage.getItem("user")))["lastName"]
    };

    console.log('Story submitted:', JSON.stringify(data));
    try {
      const response = await fetch(config.storyParticipationUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle successful response
      const responseData = await response.json();
      console.log('Response from server:', responseData);

      const message = responseData.message;
      console.log('Message:', message);

      const messageElement = document.getElementById('server_msg');
      if (messageElement) {
        messageElement.style.display = 'block';
        messageElement.textContent = message
        messageElement.style.color = 'green'
      }

      // You can redirect or show a success message here
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
      const messageElement = document.getElementById('server_msg');
      if (messageElement) {
        messageElement.style.display = 'block';
        messageElement.textContent = 'There was a problem with your fetch operation'
        messageElement.style.color = 'red'
      }
    }
  };

  const handleStoryClick = (story) => {
    setSelectedStory(story);
  };

  return (
    <div>
      <MessageArea></MessageArea>
      <h2>Connections</h2>
      <table id="userTable">
        <thead>
          <tr>
            <th>User Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Story</th>
          </tr>
        </thead>
        <tbody>
          {connections.map(connection => (
            <tr key={connection.profileId}>
              <td>{connection.userName}</td>
              <td>{connection.firstName}</td>
              <td>{connection.lastName}</td>
              <td>
                {connection.stories.map((story, index) => (
                  <div key={index}>
                    <Link to="#" onClick={() => handleStoryClick(story)}>{story.content}</Link>
                    <span style={{ margin: '0 4px' }}></span>
                    <button key={index} onClick={() => handleAccept(story.storyId)}>Participate</button><p></p>
                  </div>                  
                ))}
              </td>              
            </tr>
          ))}
        </tbody>
      </table>
      {selectedStory && (
        <div>
          <h3>Selected Story Details</h3>
          <p><b>Story:</b> {selectedStory.content}</p>
          <p><b>Where:</b> {selectedStory.where}</p>
          <p><b>When:</b> {selectedStory.when}</p>
        </div>
      )}
    </div>
  );
};

export default Connections;
