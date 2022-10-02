import { BASE_URL } from './../utils/urls';
export const deletePost = async (id: number) => {
  return fetch(`${BASE_URL}${id}`, {
    method: 'DELETE',
  });
};
