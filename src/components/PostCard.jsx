import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import avatar from "../assets/images/avatar.png";
import Comments from "./Comments";

function PostCard({ post, currentId }) {
  const { title, body, id } = post;

  return (
    <>
      <Row className="align-items-md-center">
        <Col xs={6} md={1}>
          <Image src={avatar} roundedCircle fluid />
        </Col>
        <Col>
          <Card.Title>{title}</Card.Title>
        </Col>
      </Row>
      <Card.Text>{body}</Card.Text>
      {currentId == id ? <Comments id={currentId} /> : null}
    </>
  );
}

export default React.memo(PostCard);
