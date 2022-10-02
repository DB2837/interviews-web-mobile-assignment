import { BASE_URL } from './../utils/urls';
import { Post } from './../components/posts/Posts';

export const editPost = async (post: Post) => {
  return fetch(`${BASE_URL}${post.id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      title: post.title,
      body: post.body,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
