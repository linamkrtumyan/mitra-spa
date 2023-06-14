import { put, takeLatest, all, throttle } from "redux-saga/effects";

function* fetchNews() {
  const json = yield fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );
  yield put({ type: "NEWS_RECEIVED", json: json });
}
function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}

function* fetchCommentsByPost(action) {
  console.log(action, 'id');
  const json = yield fetch(`https://jsonplaceholder.typicode.com/posts/${action.payload}/comments`).then(
    (response) => response.json()
  );
  yield put({ type: "COMMENTS_RECEIVED", json: json });
}
function* actionWatcherComments() {
  // yield throttle(5000, "GET_COMMENTS_BY_POST", fetchCommentsByPost);
  yield takeLatest("GET_COMMENTS_BY_POST", fetchCommentsByPost);

}


export default function* rootSaga() {
  yield all([actionWatcher(), actionWatcherComments()]);
}



