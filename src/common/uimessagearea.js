import React from "react";
import styled from "styled-components";

const MessageSection = styled.div`
  display: flex;
  justify-content: center;
  grid-area: main;
`;

export const MessageArea = () => (
  <MessageSection>
    <p id="server_msg"></p>
  </MessageSection>
);
