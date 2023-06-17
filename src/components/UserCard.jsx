import React from "react";
import Card from "react-bootstrap/Card";

function UserCard({ user }) {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="m-4">
        <Card.Body>
          <p>name: {user.name}</p>
          <p>email: {user.email}</p>
          <p>phone: {user.phone}</p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserCard;
