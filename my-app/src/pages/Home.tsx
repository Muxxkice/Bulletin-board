import React, { useContext } from "react";

import { Header } from "../compornents/Header";
import useThread from "../compornents/useThread";
import { useNavigate } from "react-router-dom";
import { ThreadsType } from "../type/Type";
import { ThreadContext } from "../compornents/ThreadProvider";

const Home = () => {
  const navigate = useNavigate();
  const threads = useThread();
  // const { setThreadTitle } = useContext(ThreadContext);
  console.log(threads);

  const threads_map = threads.threads.map(
    (thread: ThreadsType, index: number) => {
      return (
        <div key={index} className="thred_container">
          <p>ID</p>
          <p>{thread.id}</p>
          <p>Title</p>
          <h2>{thread.title}</h2>
          <button
            onClick={() => {
              navigate(`thread/${thread.id}`);
              // setThreadTitle(thread.title);
            }}
          >
            投稿一覧
          </button>
        </div>
      );
    }
  );

  return (
    <>
      <Header />
      <main>
        <h2>スレッド一覧</h2>
        {threads_map}
        <button
          onClick={async () => {
            navigate("/thread/new");
          }}
        >
          新規作成
        </button>
        <br />
      </main>
    </>
  );
};
export default Home;
