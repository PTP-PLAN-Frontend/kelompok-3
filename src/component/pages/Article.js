import React from "react";
import { NewsContextProvider } from "../NewsContext";
import News from "../News";
import '../../App.css';

export default function Article() {
  return (
    <>
      <NewsContextProvider>
        <News />
      </NewsContextProvider>
    </>
  );
}
