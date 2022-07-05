import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getPosts } from "../api/ThreadApi";

export const Detail = () => {
  const [posts, setPosts] = useState([]);
  const [offset, setOffset] = useState(10);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getPosts(id);
      setPosts(res);
    })();
  }, []);

  const posts_map = posts.map((post, index) => {
    return (
      <div key={index} className="thred_container">
        <p>Posts</p>
        <p>{post.post}</p>
        <p>id</p>
        <p>{post.id}</p>
        <button
          onClick={() => {
            // navigate(`thread/${thread.id}`);
          }}
        >
          投稿
        </button>
      </div>
    );
  });

  return (
    <>
      <h2>投稿一覧</h2>
      {posts_map}
      <p>idは{id}</p>
    </>
  );
};
export default Detail;
