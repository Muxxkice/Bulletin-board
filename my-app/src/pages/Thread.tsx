import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

import { Header } from "../compornents/Header";
import { getThreads } from "../api/ThreadApi"
import New from "./New";

export const Thread = () => {
  const [threads, setThreads] = useState([])
  const [offset, setOffset] = useState(10)
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await getThreads();
      setThreads(res)
    })();
  }, [])

  const threads_map = threads.map((thread, index) => {
    return (
      <div key={index}>
        <p>ID</p>
        <p>{thread.id}</p>
        <p>Title</p>
        <p>{thread.title}</p>
      </div>
    )

  })

  return (
    <>
      <Header />
      <h2>スレッド一覧</h2>
      <h1>Thread</h1>
      {threads_map}
      <button onClick={async () => {
        navigate("new")
      }} >新規作成</button >
      <br />
      <button>もっとみる</button>

    </>

  )
};
export default Thread;
