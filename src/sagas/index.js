import { put, takeLatest, all, call } from "redux-saga/effects";
const apiUrl = "http://tpi.uneed.ir:7100/post/search";
var myHeaders = new Headers();
myHeaders.append("t", localStorage.getItem("token"));
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  lm: "10",
  pg: "1",
  tp: "1",
});

async function getApi() {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  });
  const result_1 = await response.text();
  return JSON.parse(result_1);
}

function* fetchNews() {
  const products = yield call(getApi);
  yield put({ type: "PRODUCTS_RECEIVED", product: products });
}

function* actionWatcher() {
  yield takeLatest("GET_PRODUCTS", fetchNews);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
