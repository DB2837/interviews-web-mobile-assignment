import React from 'react';
import styled, { keyframes } from 'styled-components';
import useFetchData from '../../hooks/useFetchData';
import { BASE_URL } from '../../utils/urls';
import ErrorBox from '../ErrorBox';
import Loader from '../Loader';
import CommentCard from './CommentCard';

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/posts/1/comments';

export type Comment = {
  body: string;
  id: number;
  name: string;
  email: string;
  postId: number;
};

type TProsp = {
  postId: number;
  showComments: boolean;
};

const Comments = ({ postId, showComments }: TProsp) => {
  const {
    data: comments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}${postId}/comments`);

  return (
    <CommentsContainer showComments={showComments}>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorBox message='Something went wrong, failed to fetch comments.' />
      ) : (
        <div>
          {comments.map((comment: Comment) => {
            return (
              <CommentCard
                key={comment.id}
                body={comment.body}
                name={comment.name}
                email={comment.email}
              />
            );
          })}
        </div>
      )}
    </CommentsContainer>
  );
};

export default Comments;

const inAnimation = keyframes`
 0% {
    opacity: 0;
    visibility: hidden;
  }
 100% {
    opacity: 1;
    visibility: visible;
  }
`;

const CommentsContainer = styled.div<{ showComments: boolean }>`
  padding: 0.5rem;
  width: 100%;
  height: 300px;
  background-color: #464646;
  animation: ${({ showComments }) => (showComments ? inAnimation : null)} 550ms
    ease-in;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
`;
