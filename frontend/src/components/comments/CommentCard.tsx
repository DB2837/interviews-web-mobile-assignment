import React from 'react';
import styled from 'styled-components';

type TProps = {
  body: string;
  name: string;
  email: string;
};

const CommentCard = ({ body, name, email }: TProps) => {
  return (
    <CardContainer>
      <h4>
        {name} - <EmailWrapper>{email}</EmailWrapper>
      </h4>
      <p>{body}</p>
    </CardContainer>
  );
};

export default CommentCard;

const CardContainer = styled.div`
  margin: 1rem 0;
`;

const EmailWrapper = styled.span`
  color: #ff9148;
`;
