import { useContext, useState } from 'react';
import { PostsContext } from '../../context/posts.context';
import { addPost } from '../../services/addPost';
import { Post } from '../posts/Posts';
import ModalContainer from './ModalContainer';
import { Button, ButtonsContainer, StyledTextArea } from './styles';

const USERID = 1;

type TProps = {
  handleCloseModal: () => void;
};

const AddPostModal = ({ handleCloseModal }: TProps) => {
  const { posts, setPosts } = useContext(PostsContext);
  const [post, setPost] = useState(() => ({
    title: '',
    body: '',
  }));

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleAddPostSubmit = async () => {
    if (post.title !== '' && post.body !== '') {
      setPosts((prev) => [
        ...prev,
        {
          id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1, // remove when implementing backend
          title: post.title,
          body: post.body,
          userId: USERID,
        },
      ]);

      try {
        const response = await addPost({
          title: post.title,
          body: post.body,
          userId: USERID,
        });

        console.log(response);
      } catch (error) {
        console.log(error);
      }

      handleCloseModal();
    }
  };

  return (
    <ModalContainer>
      <StyledTextArea
        value={post.title}
        name='title'
        onChange={handleChange}
        placeholder='Title (cannot be empty)'
      />

      <br />

      <StyledTextArea
        value={post.body}
        name='body'
        onChange={handleChange}
        placeholder='Body (cannot be empty)'
      />
      <ButtonsContainer>
        <Button onClick={handleAddPostSubmit}>add</Button>
        <Button onClick={handleCloseModal}>close</Button>
      </ButtonsContainer>
    </ModalContainer>
  );
};

export default AddPostModal;
