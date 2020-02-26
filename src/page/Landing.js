import React, { useEffect } from "react";
import { Jumbotron, Container, Row, Col, Navbar } from "react-bootstrap";
import LoginModal from "../modal/LoginModal";
import RegisterModal from "../modal/RegisterModal";
import cat from "../image/cat-background.jpg";

function Landing(props) {
  const [matches, setMatches] = React.useState(
    window.matchMedia("(min-width: 578px)").matches
  );
  const [h1Size, seth1Size] = React.useState(
    window.matchMedia("(min-width: 578px)").matches ? "8vH" : "5.5vH"
  );
  const jumbotron = {
    paddingTop: "35.8vH",
    background: " url(" + cat + ")" + " no-repeat center fixed",
    backgroundSize: "cover",
    marginBottom: 0,
    borderRadius: 0
  };
  const footer = {
    paddingTop: "2%",
    backgroundColor: "#cc0066",
    paddingBottom: "2%"
  };
  return (
    <>
      <style type="text/css">
        {`
       h1, p{
         color: #ffffff;
       }

     `}
      </style>

      <Container fluid="md">
        <Navbar bg="transparent" fixed="top">
          <a
            class="navbar-brand"
            style={{ marginLeft: "25px", fontSize: "35px", color: "white" }}
          >
            breedner
          </a>
          <Navbar.Collapse className="justify-content-end">
            <LoginModal />
          </Navbar.Collapse>
        </Navbar>
        <Row>
          <Col xs={12} style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <Jumbotron style={jumbotron} className="text-center">
              <h1 style={{ fontSize: h1Size }}>
                Swipe <b>right.</b>
              </h1>
              <h1 style={{ fontSize: h1Size }}>
                Make your pet <b>happy</b>
              </h1>

              <p>
                by clicking enter, you agree to <u>our terms</u>. Learn how we
                process your data in our <u>Privacy Policy</u> and{" "}
                <u>Cookie Policy</u>.
              </p>
              <RegisterModal />
              <p></p>
            </Jumbotron>
          </Col>
          <Col xs={12} style={footer} className="text-center">
            <h1 style={{ fontSize: h1Size }}>FIND YOUR PET'S MATCH</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Landing;
