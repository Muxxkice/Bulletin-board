import React from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Thread from "./pages/Thread";
import New from "./pages/New";
import Page404 from "./pages/Page404.js";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thread" element={<Thread />}>
          <Route path="new" element={<New />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default App;
