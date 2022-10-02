import styled from 'styled-components';
import PostCard from './PostCard';

export type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

type TProps = {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
};

const Posts = ({ posts, setPosts }: TProps) => {
  const handleDelete = (id: number) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };
  return (
    <PostsContainer>
      {posts?.length > 0 ? (
        posts.map((post) => {
          return (
            <PostCard
              key={post.id}
              body={post.body}
              id={post.id}
              title={post.title}
              userId={post.userId}
              handleDelete={() => handleDelete(post.id)}
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
