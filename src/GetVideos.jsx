import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useVideoSearch from "./useVideoSearch";

export const VideosContext = createContext();

const GetVideos = (props) => {
  const [query, setQuery] = useState("all");
  const [page, setPage] = useState(1);
  const [orientation, setOrientation] = useState(null)

  const location = useLocation()

  useEffect(()=>{
    if (location.pathname === '/'){
      setOrientation('landscape')
    }else if(location.pathname === '/shorts'){
      setOrientation('portrait')
    }
    setPage(1)
  }, [location])

  const { isloading, result, error, hasMore, progress, setProgress } = useVideoSearch(query, page, orientation);
  return (
    <VideosContext.Provider
      value={{ result, isloading, setQuery, error, hasMore, setPage, progress, setProgress, setOrientation }}
    >
      {props.children}
    </VideosContext.Provider>
  );
};

export default GetVideos;
