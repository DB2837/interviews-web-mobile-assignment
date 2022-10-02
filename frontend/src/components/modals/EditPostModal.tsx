import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { PostsContext } from '../../context/posts.context';
import { editPost } from '../../services/editPost';
import { Post } from '../posts/Posts';
import ModalContainer from './ModalContainer';
import { Button, ButtonsContainer, StyledTextArea } from './styles';

type TProps = {
  post: Post;
  handleCloseModal: () => void;
};

const EditPostModal = ({ post, handleCloseModal }: TProps) => {
  const { setPosts } = useContext(PostsContext);
  const [editedPost, setEditedPost] = useState(() => post as Post);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedPost((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleEditSubmit = async () => {
    setPosts((prevState) =>
      prevState.map((post) => {
        if (post.id === editedPost.id) {
          return {
            ...post,
            title: editedPost.title,
            body: editedPost.body,
          };
        }

        return post;
      })
    );

    try {
      const response = await editPost(post);
      const data = await response.json();

      console.log(response);
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    handleCloseModal();
  };

  return (
    <ModalContainer>
      <StyledTextArea
        value={editedPost.title}
        name='title'
        onChange={handleChange}
        placeholder='Title'
      />

      <br />

      <StyledTextArea
        value={editedPost.body}
        name='body'
        onChange={handleChange}
        placeholder='Body'
      />
      <ButtonsContainer>
        <Button onClick={handleEditSubmit}>edit</Button>
        <Button onClick={handleCloseModal}>close</Button>
      </ButtonsContainer>
    </ModalContainer>
  );
};

export default EditPostModal;
