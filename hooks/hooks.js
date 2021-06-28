import { useEffect, useState } from 'react';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const usePosts = () => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(`${baseUrl}/posts`);
        const posts = await res.json();
        setData(posts);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setData([]);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

const usePost = (id) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(`${baseUrl}/posts/${id}`);
        const posts = await res.json();
        setData(posts);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setData([]);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, isLoading, error };
};

export { usePosts, usePost };
