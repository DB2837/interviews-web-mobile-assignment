import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ErrorBox from './components/ErrorBox';
import Loader from './components/Loader';
import Posts from './components/posts/Posts';
import useFetchData from './hooks/useFetchData';

const URL = `https://jsonplaceholder.typicode.com/posts?_page=0&_limit=6`;

function App() {
  const { data: posts, setData: setPosts, error, loading } = useFetchData(URL);

  return (
    <PageContainer>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorBox />
      ) : (
        <Posts posts={posts} setPosts={setPosts} />
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
