import axios from "axios";

var data = JSON.stringify({
  lm: "1",
  pg: "1",
  tp: "1",
});

export const server = axios.create({
  method: "post",
  baseURL: "http://tpi.uneed.ir:7100/post/search",
  headers: {
    t: "WFT9KbF8mCoP6cKFWCmfqvs/pU9TUR8IRLOqMgOFpNE=",
    "Content-Type": "application/json",
  },
  data: data,
});
