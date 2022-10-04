import React from 'react';
import styled from 'styled-components';
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
};

const Comments = ({ postId }: TProsp) => {
  const {
    data: comments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}${postId}/comments`);

  console.log(comments);

  return (
    <CommentsContainer>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorBox message='Something went wrong, failed to fetch comments.' />
      ) : (
        <div>
          {comments.map((comment: Comment) => {
            return (
              <CommentCard
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

const CommentsContainer = styled.div`
  padding: 0.5rem;
  width: 100%;
  height: 300px;
  background-color: #464646;

  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
`;
