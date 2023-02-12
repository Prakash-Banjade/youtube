import React, { createContext, useState } from "react";
import useVideoSearch from "./useVideoSearch";

export const VideosContext = createContext();

const GetVideos = (props) => {
  const [query, setQuery] = useState("all");
  const [page, setPage] = useState(1);
  const [orientation, setOrientation] = useState(null)


  // const { isloading, result, error, hasMore, progress, setProgress } = useVideoSearch(query, page, orientation);
  return (
    <VideosContext.Provider
      value={{ query, setQuery, page, setPage, setOrientation }}
    >
      {props.children}
    </VideosContext.Provider>
  );
};

export default GetVideos;
