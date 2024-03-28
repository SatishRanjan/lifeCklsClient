import React, { useState, useEffect } from 'react';
import '../UserInfo.css'

const config = require('../common/config.js');

const ConnectionRequests = () => {
  const [connectionRequests, setConnectionRequests] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {

        var url = config.connectionRequestsUrl.replace("{username}", (JSON.parse(localStorage.getItem("user")))["userName"]);
        console.log("connectionrequests url=" + url)
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setConnectionRequests(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors, e.g., set an error state
      }
    };

    fetchData();
  }, []);

  const handleConnectClick = async (requestId, actionname) => {
    // Your logic for handling the button click goes here
    console.log("Clicked on requestId:", requestId, "with action:", actionname);

    // Construct the JSON object to send
    const requestData = {
      requestId: requestId,
      connectionRequestOutcome: actionname
    };

    try {
      var url = config.connectionRequestResultUrl;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // Add any additional headers if required
        },
        body: JSON.stringify(requestData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle response if needed
      const responseData = await response.json();
      console.log('Response from server:', responseData);

      // You can perform additional actions based on the response
      // Disable "Ignore" and "Reject" buttons if action is "accept"
      if (actionname === "accept") {
        // Disable the buttons
        const acceptButton = document.getElementById(`acceptButton`);
        acceptButton.disabled = true;

        // Grey out the disabled buttons
        acceptButton.classList.add('disabled-button');
      } else if (actionname === "reject") {
        // Disable the buttons
        const rejectButton = document.getElementById(`rejectButton`);
        rejectButton.disabled = true;

        // Grey out the disabled buttons       
        rejectButton.classList.add('disabled-button');

      } else if (actionname === "ignore") {
        // Disable the buttons
        const ignoreButton = document.getElementById(`ignoreButton`);
        ignoreButton.disabled = true;
        // Grey out the disabled buttons
        ignoreButton.classList.add('disabled-button');
      }

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      // Handle error if needed
    }
  };


  return (
    <div>
      <h2>Connection Requests</h2>
      <table id="userTable">
        <thead>
          <tr>
            <th>From User</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {connectionRequests.map(request => (
            <tr key={request.requestId}>
              <td>{request.fromUserName}</td>
              <td><button id={"acceptButton"} type="submit" className="connect-button" onClick={() => handleConnectClick(request.requestId, "accept")}>Accept</button></td>
              <td><button id={"rejectButton"} type="submit" className="connect-button" onClick={() => handleConnectClick(request.requestId, "reject")}>Reject</button></td>
              <td><button id={"ignoreButton"} type="submit" className="connect-button" onClick={() => handleConnectClick(request.requestId, "ignore")}>Ignore</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConnectionRequests;
