import { useState } from 'react';
import styled from 'styled-components';
import ErrorBox from './components/ErrorBox';
import Loader from './components/Loader';
import PostCard, { TPost } from './components/PostCard';
import useFetchData from './hooks/useFetchData';

const URL = 'https://jsonplaceholder.typicode.com/posts?_page=0&_limit=6';

function App() {
  const { data: posts, error, loading } = useFetchData(URL);

  return (
    <PageContainer>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorBox />
      ) : (
        <>
          {' '}
          <>
            <PostsContainer>
              {posts?.length > 0 &&
                posts.map((post: TPost) => {
                  return (
                    <PostCard
                      body={post.body}
                      id={post.id}
                      title={post.title}
                      userId={post.userId}
                    />
                  );
                })}
            </PostsContainer>
          </>
        </>
      )}
    </PageContainer>
  );
}

export default App;

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem;
`;

const PostsContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 1100px;
  min-width: 320px;
`;
