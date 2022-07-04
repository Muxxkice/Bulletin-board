import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Home from "./page/Home";
import Thread from "./page/Thread";
import New from "./page/New";

export const App = () => {
  return (
    <>
      <Home />
      <Thread />
      <New />
    </>
  );
};

export default App;
