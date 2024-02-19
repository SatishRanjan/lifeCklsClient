import React from 'react';
import styled from 'styled-components';
import homeImage from "../lifeCklsHome.png";

const CenteredDiv = styled.div`
  text-align: center;
  font-size: 2em;
`;

const RegistrationFormPage = () => {
  return (
    <CenteredDiv>
      <h1 className="center-text">Welcome to the LifeCkls!</h1>
      <img src={homeImage} alt="LifeCkls" />
    </CenteredDiv>
  );
};

export default RegistrationFormPage;
