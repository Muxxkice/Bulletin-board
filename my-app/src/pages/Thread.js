import { Link, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

import { Header } from "../compornents/Header";
import { getThreads } from "../api/ThreadApi"

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

  console.log(threads)
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
      <h1>Thread</h1>
      {threads_map}
      <button onClick={async () => {
        console.log("ボタン")
      }} >新規作成</button >

    </>

  )
};
export default Thread;
