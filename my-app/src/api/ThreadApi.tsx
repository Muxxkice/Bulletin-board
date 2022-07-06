import axios, { AxiosResponse } from "axios";
import { ThreadsType, NewThreadsType, CommentType } from "../type/Type";

const instance = axios.create({
  baseURL:
    //  "https://railway-react-bulletin-board.herokuapp.com",
    "https://virtserver.swaggerhub.com/INFO_3/BulletinBoardApplication/1.0.0",
  // timeout: 2000,
  headers: { "Access-Control-Allow-Origin": "*" },
});

export const getThreads = () => {
  return instance
    .get("/threads?offset=10")
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        return res.data;
      } else {
        return null;
      }
    })
    .catch((e) => {
      console.log(e);
      console.log(e.ErrorMessageJP);
    });
};

type Data = {
  title: string;
};

export const newThread = async (data: Data) => {
  try {
    console.log(data);
    const res = await instance.post("/threads", data);
    console.log(res);
    return res.data;
  } catch (e) {
    console.log(e);
    console.log(e.ErrorMessageJP);
  }
};

export const getPosts = async (id: string) => {
  try {
    const res = await instance.get(`/threads/${id}/posts`);
    console.log(res.data.posts);
    return res.data.posts;
  } catch (e) {
    console.log(e);
    console.log(e.ErrorMessageJP);
  }
};

export const postComment = (data: CommentType, id: string) => {
  console.log(data);
  console.log(id);
  return instance
    .post(`/threads/${id}/posts`, data)
    .then((res) => {
      console.log(res);
      return res.status;
    })
    .catch((e) => {
      console.log(e);
      console.log(e.ErrorMessageJP);
    });
};
