import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import myavatar from "../assets/images/myAvatar.jpeg";
import { Row } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar bg="light" expand={false} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="/">Mitra SPA</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                Mitra
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              
            <Row className="align-items-end">
                <Col xs={3}>
                  <Image src={myavatar} roundedCircle fluid />
                </Col>
                {/* <Col className="align-items-center  "> */}
                  <span>Lina Mkrtumyan</span>
                  <span>mkrtumyanlina@gmail.com</span>
                {/* </Col> */}
              </Row>

              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/">Posts</Nav.Link>
              </Nav>

             
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
