import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCommentsByPost } from "../store/actions";
import Card from "react-bootstrap/Card";
import Loader from "./Loader";

function Comments({ getCommentsByPost, comments, loading, id }) {
  useEffect(() => {
    getCommentsByPost(id);
  }, []);

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  return (
    <>
      {comments &&
        comments.map((comment) => {
          return (
            <Card className="m-2">
              <Card.Body>
                <p> {comment.email}</p>
                <p> {comment.body}</p>
              </Card.Body>
            </Card>
          );
        })}
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state, "state");
  return {
    comments: state.comments,
    loading: state.commentLoading,
  };
};

const mapDispatchToProps = {
  getCommentsByPost: (id) => getCommentsByPost(id),
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Comments));
