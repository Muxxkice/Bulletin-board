import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { getPosts, getThreads } from "../api/ThreadApi";
import { postComment } from "../api/ThreadApi";
import { Header } from "../compornents/Header";
import useThread from "../compornents/useThread";
import { CommentType } from "../type/Type";
import { ThreadContext } from "../compornents/ThreadProvider";

export const Archives = () => {
  const [posts, setPosts] = useState([]);
  const threads = useThread();
  const navigate = useNavigate();
  const { id } = useParams();
  // const { threadTitle } = useContext(ThreadContext);
  const [messageData, setMessageData] = useState<CommentType>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const title = useContext(ThreadContext);

  //useCallbackで書く
  const fetchPosts = async () => {
    const res = await getPosts(id);
    setPosts(res);
  };

  useEffect(() => {
    fetchPosts();
  }, [id]);

  const onSubmit = (data: CommentType) => {
    console.log(data);
    setMessageData(data);
  };

  const onClickComment = async () => {
    console.log(" onClickComment");
    const res = await postComment(messageData, id);
    if (res === 200) {
      reset();
      fetchPosts();
    } else {
      //考える
      //エラーメッセージをだしたり...
      alert("エラー");
    }
  };

  const posts_map = posts.map((post, index) => {
    return (
      <div key={index} className="thread_container">
        <dl>
          <dt>名前:</dt>
          <dd>{post.id}</dd>
        </dl>
        <h3>{post.post}</h3>
      </div>
    );
  });

  return (
    <>
      <Header />
      <main>
        <div className="title">
          <h2>
            タイトル
            {/* {threadTitle} */}
          </h2>
        </div>
        <div className="archives_container">
          {posts_map}
          <div className="message_container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <p>投稿</p>
              <textarea {...register("post", { required: true })} />
              {/* <span>必須</span> */}
              {errors.post && <span>必須項目です</span>}
              <br />
            </form>
            <button onClick={onClickComment}>投稿</button>
          </div>
        </div>
      </main>
    </>
  );
};
export default Archives;
