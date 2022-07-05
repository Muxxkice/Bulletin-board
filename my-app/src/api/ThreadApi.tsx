import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://virtserver.swaggerhub.com/INFO_3/BulletinBoardApplication/1.0.0",
  timeout: 2000,
  headers: { "Access-Control-Allow-Origin": "*" },
});

export const getThreads = () => {
  return instance.get("/threads?offset=10").then((res) => {
    console.log(res.data);
    return res.data;
  });
};

export const newThread = (data) => {
  console.log(data);
  return instance.post("/threads", data).then((res) => {
    console.log(res);
    return res.data;
  });
};

export const getPosts = (id) => {
  console.log(id);
  return instance
    .get(`/threads/${id}/posts`)
    .then((res) => {
      console.log(res.data.posts);
      return res.data.posts;
    })
    .catch((e) => {
      console.log(e.ErrorMessageJP);
    });
};
