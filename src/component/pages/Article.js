import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
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