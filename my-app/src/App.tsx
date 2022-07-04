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

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thread" element={<Thread />}>
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
