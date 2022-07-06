import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
// import Thread from "./pages/Thread";
import New from "./pages/New";
import Page404 from "./pages/Page404";
import Archives from "./pages/Archives";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thread/new" element={<New />} />
        <Route path="/thread/:id" element={<Archives />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default App;
