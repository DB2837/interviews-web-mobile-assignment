import { createContext } from 'react';
import { Post } from '../components/posts/Posts';

export type TModals = {
  editPost: boolean;
  confirmDeletion: boolean;
  addPost: boolean;
};

type Context = {
  modals: TModals;
  setModals: React.Dispatch<React.SetStateAction<TModals>>;
};

export const ModalsContext = createContext({} as Context);
