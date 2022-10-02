import React from 'react';
import styled from 'styled-components';
import PostCard, { Post } from './PostCard';

type TProps = {
  posts: Post[];
  setPosts: React.Dispatch<any>;
};

const Posts = ({ posts, setPosts }: TProps) => {
  const handleDeletePost = (id: number) => {
    setPosts((prev: Post[]) => prev.filter((post) => post.id !== id));
  };
  return (
    <PostsContainer>
      {posts?.length > 0 ? (
        posts.map((post: Post) => {
          return (
            <PostCard
              key={post.id}
              body={post.body}
              id={post.id}
              title={post.title}
              userId={post.userId}
              handleDelete={() => handleDeletePost(post.id)}
            />
          );
        })
      ) : (
        <div>
          <h3>No posts to show</h3>
        </div>
      )}
    </PostsContainer>
  );
};

export default Posts;

const PostsContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 1100px;
  min-width: 320px;
`;
