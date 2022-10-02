import { createContext } from 'react';
import { Post } from '../components/posts/Posts';

type Context = {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
};

export const PostsContext = createContext({} as Context);
