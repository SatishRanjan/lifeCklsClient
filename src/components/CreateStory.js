import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MessageArea } from "../common/uimessagearea.js";

const config = require('../common/config.js');

const CenteredDiv = styled.div`
  text-align: center;
  font-size: 2em;
`;

const FormContainer = styled.div`
  margin-top: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: calc(100% - 10px); /* Adjust width as needed */
`;

const TextArea = styled.textarea`
  width: calc(100% - 10px); /* Adjust width as needed */
`;

const CreateStory = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [textToPlace, setTextToPlace] = useState('');
  const [content, setContent] = useState('');

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleTextChange = event => {
    setTextToPlace(event.target.value);
  };

  const handleContentChange = event => {
    const inputContent = event.target.value;
    if (inputContent.length <= 256) {
      setContent(inputContent);
    } else {
      // Truncate the input content to 256 characters
      setContent(inputContent.slice(0, 256));
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const data = {
      when: selectedDate,
      where: textToPlace,
      content: content,
      from: (JSON.parse(localStorage.getItem("user")))["userName"]
    };

    console.log('Story submitted:', JSON.stringify(data));
    try {
      const response = await fetch(config.createStoryUrl, {
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

  return (
    <div>
      <CenteredDiv>
        <p className="center-text">Create your story</p>
      </CenteredDiv>
      <MessageArea></MessageArea>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="datepicker">When:</Label>
            <DatePicker id="datepicker" selected={selectedDate} onChange={handleDateChange} showTimeSelect dateFormat="Pp" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="textToPlace">Where:</Label>
            <Input id="textToPlace" type="text" value={textToPlace} onChange={handleTextChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="content">What:</Label>
            <TextArea id="content" value={content} onChange={handleContentChange} rows="5" />
          </FormGroup>
          <button type="submit">Create</button>
        </form>
      </FormContainer>
    </div>
  );
};

export default CreateStory;
