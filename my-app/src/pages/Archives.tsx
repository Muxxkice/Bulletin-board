import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { getPosts, getThreads } from "../api/ThreadApi";
import { postComment } from "../api/ThreadApi";
import { Header } from "../compornents/Header";
import useThread from "../compornents/useThread";
import { ThreadContext } from "../compornents/ThreadProvider";

export const Archives = () => {
  const [posts, setPosts] = useState([]);
  const threads = useThread();
  const navigate = useNavigate();
  const { id } = useParams();
  const [messageData, setMessageData] = useState();
  // const title = useContext(ThreadContext);
  useEffect(() => {
    (async () => {
      const res = await getPosts(id);
      setPosts(res);
    })();
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setMessageData(data);
  };

  const onClickComment = async () => {
    console.log(" onClickComment");
    const res = await postComment(messageData, id);
    console.log(res);
  };

  const posts_map = posts.map((post, index) => {
    return (
      <div key={index} className="thred_container">
        <p>id</p>
        <p>{post.id}</p>
        <p>Posts</p>
        <p>{post.post}</p>
      </div>
    );
  });

  return (
    <>
      <Header />
      <main>
        <div className="title">
          <p>タイトル</p>
        </div>
        <div className="archives_container">
          {posts_map}
          <div className="message_container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <p>投稿</p>
              <input {...register("post", { required: true })} />
              {/* <span>必須</span> */}
              {errors.post && <span>必須項目です</span>}
              <br />
            </form>
            <button type="submit" onClick={onClickComment}>
              投稿
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
export default Archives;
