import React, { useState, useEffect, useRef} from 'react';
//import styled from 'styled-components';
import '../UserInfo.css'

const config = require('../common/config.js');

/*const CenteredDiv = styled.div`
  text-align: center;
  font-size: 2em;
`;*/

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

  const handleConnectClick = async (actionname) => {
    // Your logic for handling the button click goes here
    console.log("Connect button clicked!", actionname);
    // You can perform additional actions, such as making an API request or updating state.
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
                <td><button type="submit" className="connect-button" onClick={() => handleConnectClick("accept")}>Accept</button></td>
                <td><button type="submit" className="connect-button" onClick={() => handleConnectClick("reject")}>Reject</button></td>
                <td><button type="submit" className="connect-button" onClick={() => handleConnectClick("ignore")}>Ignore</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>   
  );
};

export default ConnectionRequests;
