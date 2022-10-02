import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ErrorBox from './components/ErrorBox';
import Loader from './components/Loader';
import Posts from './components/posts/Posts';
import { ModalsContext, TModals } from './context/modals.context';
import { PostsContext } from './context/posts.context';
import useFetchData from './hooks/useFetchData';

const URL = `https://jsonplaceholder.typicode.com/posts?_page=`;
const TOTAL_PAGES = 10;

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const {
    data: posts,
    setData: setPosts,
    error,
    loading,
  } = useFetchData(`${URL}${currentPage}`);
  const [modals, setModals] = useState<TModals>(() => ({
    editPost: false,
    confirmDeletion: false,
    addPost: false,
  }));

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      <ModalsContext.Provider value={{ modals, setModals }}>
        <PageContainer>
          {loading ? (
            <Loader />
          ) : error ? (
            <ErrorBox />
          ) : (
            <Posts
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={TOTAL_PAGES}
            />
          )}
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
