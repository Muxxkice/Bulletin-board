import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { newThread } from "../api/ThreadApi";
import { Header } from "../compornents/Header";

const New = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [newData, setNewData] = useState();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    setNewData(data);
  };

  const onClickNew = async () => {
    const res = await newThread(newData);
    if(res) {
      
    }
    setNewData(res);
  };

  return (
    <div>
      <Header />
      <main>
        <h2>新規スレッドを立てる</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>タイトル</p>
          <input {...register("title", { required: true })} />
          {/* <span>必須</span> */}
          {errors.title && <span>必須項目です</span>}
          <br />
          <button type="submit" onClick={onClickNew}>
            追加
          </button>
        </form>
      </main>
    </div>
  );
};
export default New;
