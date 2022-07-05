import React from "react";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

export const Detail = () => {
  const [threads, setThreads] = useState([]);
  const [offset, setOffset] = useState(10);
  const navigate = useNavigate();

  return (
    <>
      <p>Detail</p>
    </>
  );
};
export default Detail;
