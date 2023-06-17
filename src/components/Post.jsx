import React from "react";
import Card from "react-bootstrap/Card";

function Post(props) {
  const { id, title, body } = props.post;

  return (
    <Card
      bg="light"
      key="Light"
      text="dark"
      style={{ width: "18rem" }}
      className="m-2 "
    >
      <Card.Header>Post #{id}</Card.Header>
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Post;
