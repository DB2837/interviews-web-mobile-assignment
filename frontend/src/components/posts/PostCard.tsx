import React from 'react';
import styled from 'styled-components';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

type TProps = {
  body: string;
  id: number;
  title: string;
  userId: number;
  handleDeletePost: () => void;
  handleEditPost: () => void;
};

const PostCard = ({
  body,
  id,
  title,
  userId,
  handleEditPost,
  handleDeletePost,
}: TProps) => {
  return (
    <CardContainer>
      <TitleWrapper>
        <h3>{title}</h3>
        <IconsContainer>
          <AiOutlineEdit style={IconStyle} onClick={handleEditPost} />
          <AiOutlineDelete style={IconStyle} onClick={handleDeletePost} />
        </IconsContainer>
      </TitleWrapper>
      <BodyWrapper>
        <p>{body}</p>
      </BodyWrapper>
      <Separator />
    </CardContainer>
  );
};

export default PostCard;

const IconStyle = {
  fontSize: '1.4rem',
  margin: ' .25rem',
  cursor: 'pointer',
  color: '#ff7a41',
};

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-height: 500px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
`;

const BodyWrapper = styled.div`
  margin-top: 1rem;
  color: #b8b8b8;
`;

const IconsContainer = styled.div`
  position: absolute;
  top: 0px;
  right: -5px;
  display: flex;
  justify-content: flex-end;
  width: 90px;
  /*  border: 2px solid red; */
  /*  font-size: 1.4rem; */
`;

const Separator = styled.div`
  border: 1px solid #fff;
  margin-top: 1.5rem;
`;
