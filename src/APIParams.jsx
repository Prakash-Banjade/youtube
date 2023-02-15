import React, { createContext, useState, useEffect } from "react";

export const APIParamsContext = createContext();

const APIParams = (props) => {
  const [query, setQuery] = useState("all");
  const [page, setPage] = useState(1);
  const [progress, setProgress] = useState(0)

  return (
    <APIParamsContext.Provider
      value={{ query, setQuery, page, setPage, progress, setProgress }}
    >
      {props.children}
    </APIParamsContext.Provider>
  );
};

export default APIParams;
