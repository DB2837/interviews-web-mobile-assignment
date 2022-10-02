import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ErrorBox from './components/ErrorBox';
import Loader from './components/Loader';
import Posts from './components/posts/Posts';
import { ModalsContext, TModals } from './context/modals.context';
import { PostsContext } from './context/posts.context';
import useFetchData from './hooks/useFetchData';

const URL = `https://jsonplaceholder.typicode.com/posts?_page=0&_limit=6`;

function App() {
  const { data: posts, setData: setPosts, error, loading } = useFetchData(URL);
  const [modals, setModals] = useState<TModals>(() => ({
    editPost: false,
    confirmDeletion: false,
    addPost: false,
  }));

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      <ModalsContext.Provider value={{ modals, setModals }}>
        <PageContainer>
          {loading ? <Loader /> : error ? <ErrorBox /> : <Posts />}
        </PageContainer>
      </ModalsContext.Provider>
    </PostsContext.Provider>
  );
}

export default App;

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem;
`;
