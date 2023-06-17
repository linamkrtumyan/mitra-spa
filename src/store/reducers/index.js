const reducer = (state = {}, action) => {
  console.log(action, "action");
  switch (action.type) {
    case "GET_NEWS":
      return { ...state, loading: true };
    case "NEWS_RECEIVED":
      return { ...state, news: action.json, loading: false };

    case "GET_COMMENTS_BY_POST":
      return { ...state, commentLoading: true };

    case "COMMENTS_RECEIVED":
      return { ...state, comments: action.json, commentLoading: false };

    case "GET_USER":
      return { ...state, userLoading: true };

    case "USER_RECEIVED":
      return { ...state, user: action.json, userLoading: false };

    case "GET_USER_POSTS":
      return { ...state, userPostsLoading: true };

    case "USER_POSTS_RECEIVED":
      return { ...state, userPosts: action.json, userPostsLoading: false };

    default:
      return state;
  }
};
export default reducer;
