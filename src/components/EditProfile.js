import React from 'react';
import styled from 'styled-components';

const CenteredDiv = styled.div`
  text-align: center;
  font-size: 2em;
`;

const EditProfile = () => {
  return (
    <CenteredDiv>
      <p className="center-text">Edit Profile Development in progress!</p>    
    </CenteredDiv>
  );
};

export default EditProfile;
