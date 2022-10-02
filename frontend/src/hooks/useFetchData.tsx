import React, { useState, useEffect } from 'react';

const useFetchData = (url: string) => {
  const [data, setData] = useState<React.SetStateAction<any>>(null);
  const [error, setError] = useState<React.SetStateAction<boolean>>(false);
  const [loading, setLoading] = useState<React.SetStateAction<boolean>>(true);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    (async () => {
      try {
        const data = await fetch(url, { signal: signal }).then((response) =>
          response?.json()
        );

        setData(data);
        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [url]);

  return { data, setData, loading, error };
};

export default useFetchData;
