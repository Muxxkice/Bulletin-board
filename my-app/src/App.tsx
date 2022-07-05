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
import Page404 from "./pages/Page404";
// import Detail from "./pages/";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thread" element={<Thread />}>
          <Route path="new" element={<New />} />
          {/* <Route path=":id" element={<Detail />} /> */}
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default App;
