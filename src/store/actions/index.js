export const getNews = () => ({
  type: "GET_NEWS",
});

export const getCommentsByPost = (id) => ({
  type: "GET_COMMENTS_BY_POST",
  payload: id,
});

export const getUser = (id) => ({
  type: "GET_USER",
  payload: id,
});

export const getUserPosts = (id) => ({
  type: "GET_USER_POSTS",
  payload: id,
});
