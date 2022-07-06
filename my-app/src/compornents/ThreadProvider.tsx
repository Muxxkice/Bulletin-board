import React, { createContext, useState } from "react";
export const ThreadContext = createContext({});

export const ThreadProvider = (props) => {
  const { children } = props;
  // const contextTitle = "タイトル";
  const [threadTitle, setThreadTitle] = useState<string>();

  return (
    <ThreadContext.Provider value={{ threadTitle, setThreadTitle }}>
      {children}
    </ThreadContext.Provider>
  );
};
export default ThreadProvider;
