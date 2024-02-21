import React from 'react';
import styled from 'styled-components';

const CenteredDiv = styled.div`
  text-align: center;
  font-size: 2em;
`;

const SendMessage = () => {
  return (
    <CenteredDiv>
      <h1 className="center-text">Development in progress!</h1>    
    </CenteredDiv>
  );
};

export default SendMessage;
