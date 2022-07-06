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

  const threads_map = threads.threads.map(
    (thread: ThreadsType, index: number) => {
      return (
        <div key={index} className="thread_container">
          <dl>
            <dt>名前:</dt>
            <dd>{thread.id}</dd>
          </dl>
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
        <div className="archives_container">{threads_map}</div>
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
