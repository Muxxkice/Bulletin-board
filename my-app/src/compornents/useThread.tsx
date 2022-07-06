import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { getThreads } from "../api/ThreadApi";
import { ThreadsType } from "../type/Type";

export const useThread = () => {
  const [threads, setThreads] = useState<Array<ThreadsType>>([]);

  useEffect(() => {
    (async () => {
      const res = await getThreads();
      if (res) {
        setThreads(res);
      }
    })();
  }, []);

  return { threads };
};
export default useThread;
