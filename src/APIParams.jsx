import React, { createContext, useState } from "react";

export const APIParamsContext = createContext();

const APIParams = (props) => {
  const [query, setQuery] = useState("all");
  const [page, setPage] = useState(1);

  return (
    <APIParamsContext.Provider
      value={{ query, setQuery, page, setPage }}
    >
      {props.children}
    </APIParamsContext.Provider>
  );
};

export default APIParams;
