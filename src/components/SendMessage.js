import React from 'react';
import styled from 'styled-components';

const CenteredDiv = styled.div`
  text-align: center;
  font-size: 2em;
`;

const SendMessage = () => {
  return (
    <CenteredDiv>
      <p className="center-text">SendMessage Development in progress!</p>    
    </CenteredDiv>
  );
};

export default SendMessage;
