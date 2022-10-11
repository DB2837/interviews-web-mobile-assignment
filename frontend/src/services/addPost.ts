import { BASE_URL } from './../utils/urls';
import { Post } from './../components/posts/Posts';

export const addPost = async (post: Omit<Post, 'id'>) => {
  return fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify({
      title: `${post.title}`,
      body: `${post.body}`,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
};
