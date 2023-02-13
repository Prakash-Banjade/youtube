import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { APIParamsContext } from "./APIParams";

export default function useVideoSearch(
  query = "all",
  page = 1,
  orientation = "landscape",
  id
) {
  const [result, setResult] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const { setProgress } = useContext(APIParamsContext);

  const location = useLocation();
  const min_duration = orientation === "landscape" ? 120 : 30;

  const API_KEY = "zD6L2vpyizUNtptqjEe1jYsDVFErIBRJFTDf4WGl7wMkk5F6X3OmUo3p";

  useEffect(() => {
    setResult([]);
  }, [query, location]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setError(false);
        setIsloading(true);

        setProgress(30); // setting progress
        const res = await axios.get("https://api.pexels.com/videos/search", {
          headers: {
            Authorization: API_KEY,
          },
          params: {
            query,
            per_page: 15,
            orientation,
            page,
            size: "small",
            min_duration,
          },
        });
        setProgress(50); // setting progress
        setIsloading(false);
        setResult((prev) => [...prev, ...res.data.videos]);
        setProgress(80); // setting progress
        setHasMore(Boolean(res.data.next_page));
        setProgress(100); // setting progress
      } catch (e) {
        setIsloading(false);
        setProgress(0); // setting progress
        setError(true);
        console.log(e);
      }
    };

    fetchVideos();
  }, [query, page, id]);

  return { isloading, result, error, hasMore };
}
