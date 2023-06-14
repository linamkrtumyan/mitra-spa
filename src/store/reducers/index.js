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

    default:
      return state;
  }
};
export default reducer;
