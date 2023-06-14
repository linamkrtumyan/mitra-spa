export const getNews = () => ({
    type: 'GET_NEWS',
});

export const getCommentsByPost = (id) => ({
    type: 'GET_COMMENTS_BY_POST',
    payload: id
});