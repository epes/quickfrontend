import { useCallback, useState, useMemo, useEffect } from "react";

type FetchData<Resp> = {
  data: Resp | undefined;
  error: Error | undefined;
  loading: boolean;
  refetch: () => void;
};

function useFetch<Req, Resp>(
  url: string,
  body: Req,
  method: string = "POST"
): FetchData<Resp> {
  const [data, setData] = useState<Resp | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const bodyString = useMemo(() => {
    if (body === null || body === undefined) {
      return undefined;
    }

    return JSON.stringify(body);
  }, [body]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    setData(undefined);

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: bodyString,
      });
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  }, [url, bodyString, method]);

  useEffect(() => {
    fetchData();
  }, [url, bodyString, method, fetchData]);

  return { data, error, loading: !data || loading, refetch: fetchData };
}

export default useFetch;
