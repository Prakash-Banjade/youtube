import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { APIParamsContext } from "./APIParams";

export default function useVideoGet(id) {
  const [requestVideo, setRequestVideo] = useState({});
  const [isloading, setIsloading] = useState(false);
  const { setProgress } = useContext(APIParamsContext);

  const API_KEY = "zD6L2vpyizUNtptqjEe1jYsDVFErIBRJFTDf4WGl7wMkk5F6X3OmUo3p";

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setIsloading(true);

        setProgress(30); // setting progress
        const res = await axios.get(`https://api.pexels.com/videos/videos/${id}`, {
          headers: {
            Authorization: API_KEY,
          }
        });
        setRequestVideo(res.data)
        setProgress(50); // setting progress
        setIsloading(false);
        setProgress(100); // setting progress
      } catch (e) {
        setIsloading(false);
        setProgress(0); // setting progress
        console.log(e);
      }
    };

    fetchVideo();
  }, [id]);

  return { isloading, requestVideo };
}
