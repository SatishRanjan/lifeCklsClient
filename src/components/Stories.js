import React, { useState, useEffect } from 'react';
import '../stories.css';

const config = require('../common/config.js');

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function fetchStories() {
      try {
        var url = config.getStoriesUrl.replace("{username}", (JSON.parse(localStorage.getItem("user")))["userName"]);
        const response = await fetch(url);
        const responseData = await response.json();
        console.log("stories=" + JSON.stringify(responseData))
        setStories(responseData);
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    }

    fetchStories();
  }, []);

  return (
    <div>
      <h2>User Stories</h2>
      <table className="stories-table">
        <thead>
          <tr>
            <th>Story</th>
            <th>When</th>
            <th>Where</th>
            <th>Participants</th>
          </tr>
        </thead>
        <tbody>
          {stories.map((story, index) => (
            <tr key={index}>
              <td>{story.content}</td>
              <td>{new Date(story.when).toLocaleString()}</td>
              <td>{story.where}</td>
              <td>
                {story.participants ? story.participants.map((participant, index) => {
                  const [firstName, lastName] = participant.split(' ');
                  return (
                    <span key={index}>{firstName} {lastName}{index !== story.participants.length - 1 && ', '}</span>
                  );
                }) : ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stories;
