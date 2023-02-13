import { useState, useEffect } from "react";
import { createClient } from "pexels";
import { useLocation } from "react-router-dom";

export default function useVideoSearch(
  query = "all",
  page = 1,
  orientation = "landscape"
) {
  const [result, setResult] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [progress, setProgress] = useState(0);

  const location = useLocation();

  useEffect(() => {
    setResult([]);
    document.documentElement.scrollTop = 0;
  }, [query, location]);

  useEffect(() => {
    setProgress(10);
    setError(false);
    setIsloading(true);

    const client = createClient(
      "zD6L2vpyizUNtptqjEe1jYsDVFErIBRJFTDf4WGl7wMkk5F6X3OmUo3p"
    );
    setProgress(30);

    client.videos
      .search({ query, per_page: 20, orientation, page })
      .then((res) => {
        setProgress(50);
        // set location based on query
        // const newQueryParams = new URLSearchParams(window.location.search);
        // newQueryParams.set("q", query);
        // window.history.pushState(
        //   {},
        //   "",
        //   `${window.location.pathname}?${newQueryParams.toString()}`
        // );

        setProgress(80);
        setIsloading(false);
        setResult((prev) => [...prev, ...res.videos]);
        setHasMore(Boolean(res.next_page));
        setProgress(100);
        console.log(res)
      })
      .catch((e) => {
        setIsloading(false);
        setProgress(0);
        setError(true);
        console.log(e)
      });
  }, [query, page]);

  return { isloading, result, error, hasMore, progress, setProgress };
}
