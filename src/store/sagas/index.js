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
  console.log(action, "id");
  const json = yield fetch(
    `https://jsonplaceholder.typicode.com/posts/${action.payload}/comments`
  ).then((response) => response.json());
  yield put({ type: "COMMENTS_RECEIVED", json: json });
}
function* actionWatcherComments() {
  yield takeLatest("GET_COMMENTS_BY_POST", fetchCommentsByPost);
}

function* fetchUser(action) {
  console.log(action, "id");
  const json = yield fetch(
    `https://jsonplaceholder.typicode.com/users/${action.payload}`
  ).then((response) => response.json());
  yield put({ type: "USER_RECEIVED", json: json });
}
function* actionWatcherUser() {
  yield takeLatest("GET_USER", fetchUser);
}

function* fetchUserPosts(action) {
  console.log(action, "id");
  const json = yield fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${action.payload}`
  ).then((response) => response.json());
  yield put({ type: "USER_POSTS_RECEIVED", json: json });
}
function* actionWatcherUserPosts() {
  yield takeLatest("GET_USER_POSTS", fetchUserPosts);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
    actionWatcherComments(),
    actionWatcherUser(),
    actionWatcherUserPosts(),
  ]);
}
