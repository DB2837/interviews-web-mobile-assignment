import { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IoMdAddCircle } from 'react-icons/io';
import { ModalsContext } from '../../context/modals.context';
import { PostsContext } from '../../context/posts.context';
import AddPostModal from '../modals/AddPostModal';
import ConformDeletionModal from '../modals/ConformDeletionModal';
import EditPostModal from '../modals/EditPostModal';
import PostCard from './PostCard';
import Slider from './Slider';

export type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

type TProps = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Posts = ({ currentPage, setCurrentPage, totalPages }: TProps) => {
  const { posts } = useContext(PostsContext);
  const { modals, setModals } = useContext(ModalsContext);
  const selectedPostRef = useRef<Post | null>(null);
  const topRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [topRef.current, currentPage]);

  const handleEditPost = (post: Post) => {
    selectedPostRef.current = post;
    setModals((prev) => ({
      ...prev,
      editPost: true,
    }));
  };

  const handleDeletePost = (post: Post) => {
    selectedPostRef.current = post;
    setModals((prev) => ({
      ...prev,
      confirmDeletion: true,
    }));
  };

  const handleAddPost = () => {
    setModals((prev) => ({
      ...prev,
      addPost: true,
    }));
  };

  const handleCloseModal = () => {
    selectedPostRef.current = null;
    setModals(() => ({
      editPost: false,
      confirmDeletion: false,
      addPost: false,
    }));
  };

  return (
    <>
      {selectedPostRef.current && modals.editPost && (
        <EditPostModal
          post={selectedPostRef.current}
          handleCloseModal={handleCloseModal}
        />
      )}

      {selectedPostRef.current && modals.confirmDeletion && (
        <ConformDeletionModal
          post={selectedPostRef.current}
          handleCloseModal={handleCloseModal}
        />
      )}

      {modals.addPost && <AddPostModal handleCloseModal={handleCloseModal} />}

      <PostsContainer ref={topRef}>
        <AddPostContainer>
          <h3>new post</h3>
          <IoMdAddCircle style={IconStyle} onClick={handleAddPost} />
        </AddPostContainer>
        {posts?.length > 0 ? (
          posts
            .map((post) => {
              return (
                <PostCard
                  key={post.id}
                  body={post.body}
                  id={post.id}
                  title={post.title}
                  userId={post.userId}
                  currentPage={currentPage}
                  handleDeletePost={() => handleDeletePost(post)}
                  handleEditPost={() => handleEditPost(post)}
                />
              );
            })
            .reverse()
        ) : (
          <div>
            <h3>No posts to show</h3>
          </div>
        )}
        <Slider
          currentPage={currentPage + 1}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </PostsContainer>
    </>
  );
};

export default Posts;

const IconStyle = {
  fontSize: '1.6rem',
  margin: ' 0 .6rem',
  cursor: 'pointer',
  color: '#ff7a41',
};

const PostsContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 1100px;
  min-width: 320px;
  height: 100%;
`;

const AddPostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
`;
