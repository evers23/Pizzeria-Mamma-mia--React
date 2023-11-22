import { useEffect, useState } from "react";

export function useFetch(endpoint) {
  const [data, setData] = useState([]);

  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData(endpoint);
  }, [endpoint]);

  return { data };
}
