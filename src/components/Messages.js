import React from 'react';
import styled from 'styled-components';

const CenteredDiv = styled.div`
  text-align: center;
  font-size: 2em;
`;

const Messages = () => {
  return (
    <CenteredDiv>
      <p className="center-text">Messages Development in progress!</p>    
    </CenteredDiv>
  );
};

export default Messages;
