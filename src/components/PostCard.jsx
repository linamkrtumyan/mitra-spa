import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Comments from "./Comments";
import avatar from "../assets/images/avatar.png";


function PostCard({ post, currentId }) {
  const { title, body, id, userId } = post;

  const navigate = useNavigate();

  const toUser = (id) => {
    navigate(`/user/${id}`);
  }

  return (
    <>
      <Row className="align-items-md-center">
        <Col xs={6} md={1}>
          <Image onClick={() => toUser(userId)}  src={avatar} roundedCircle fluid />
        </Col>
        <Col>
          <Card.Title>{title}</Card.Title>
        </Col>
      </Row>
      <Card.Text>{body}</Card.Text>
      {currentId === id ? <Comments id={currentId} /> : null}
    </>
  );
}

export default React.memo(PostCard);
