import React from 'react';
import styled from 'styled-components';

export type TPost = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

const PostCard = ({ body, id, title, userId }: TPost) => {
  return (
    <CardContainer>
      <span>
        {id} - {userId}
      </span>
      <h3>{title}</h3>
      <p>{body}</p>
    </CardContainer>
  );
};

export default PostCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid orange;

  padding: 1rem;

  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
