import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "ceae8d0312d342a49d74bcc728898e65";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=ceae8d0312d342a49d74bcc728898e65`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};