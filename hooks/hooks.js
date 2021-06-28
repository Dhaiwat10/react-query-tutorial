import { useQuery } from 'react-query';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const usePosts = () => {
  const fetchData = async () => {
    return fetch(`${baseUrl}/posts`).then((r) => r.json());
  };

  return useQuery('posts', fetchData);
};

const usePost = (id) => {
  const fetchData = async () => {
    return fetch(`${baseUrl}/posts/${id}`).then((r) => r.json());
  };

  return useQuery(['posts', id], fetchData);
};

export { usePosts, usePost };
