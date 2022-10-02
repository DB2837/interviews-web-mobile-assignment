import { useContext } from 'react';
import styled from 'styled-components';
import { PostsContext } from '../../context/posts.context';
import { deletePost } from '../../services/deletePost';
import { Post } from '../posts/Posts';
import ModalContainer from './ModalContainer';
import { Button, ButtonsContainer } from './styles';

type TProps = {
  post: Post;
  handleCloseModal: () => void;
};

const ConformDeletionModal = ({ post, handleCloseModal }: TProps) => {
  const { setPosts } = useContext(PostsContext);

  const handleDelete = async (id: number) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));

    try {
      const response = await deletePost(id);

      console.log(response);
    } catch (error) {
      console.log(error);
    }

    handleCloseModal();
  };

  return (
    <ModalContainer>
      <div>Confirm post deletion</div>
      <ButtonsContainer>
        <Button onClick={() => handleDelete(post.id)}>delete</Button>
        <Button onClick={() => handleCloseModal()}>close</Button>
      </ButtonsContainer>
    </ModalContainer>
  );
};

export default ConformDeletionModal;
