import { useEffect, useState } from "react";

export default function UseFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network is not OK");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.bodies);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [url]);
  console.log(data);

  return { data, isLoading, error };
  
}
