// RegistrationFormPage.js
import React from 'react';
import RegistrationForm from './RegistrationForm';
import { MessageArea } from "../common/uimessagearea"

const RegistrationFormPage = () => {
  return (
    <div>
      <MessageArea></MessageArea>
      <h1 className="center-text">User Registration</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationFormPage;
