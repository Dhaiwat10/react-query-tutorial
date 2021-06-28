import { useEffect, useState } from 'react';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const usePosts = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
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

  return { data, loading, error };
};

const usePost = (id) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
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

  return { data, loading, error };
};

export { usePosts, usePost };
