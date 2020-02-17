import React, { useEffect } from "react";
import { Jumbotron, Container, Row, Col, Navbar } from "react-bootstrap";
import LoginModal from "../modal/LoginModal";
import RegisterModal from "../modal/RegisterModal";
import cat from "../image/cat-background.jpg";

function Landing(props) {
  const jumbotron = {
    paddingTop: 215,
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

     .btn-flat {
       background-color: #cc0066;
       color: white;
       border-radius: 25px
     }
     .btn-flat:hover {
       color: white;
     }
     .btn-xxl {
       padding: 10px 40px;;
       font-size: 1.5rem;
     }
     `}
      </style>

      <Navbar bg="transparent" fixed="top">
        <a
          class="navbar-brand"
          style={{ marginLeft: "25px", fontSize: "30px" }}
        >
          breedner
        </a>
        <Navbar.Collapse className="justify-content-end">
          <LoginModal />
        </Navbar.Collapse>
      </Navbar>
      <Container fluid="md" style={{ height: "100%" }}>
        <Row>
          <Col xs={12} style={{ paddingRight: "0px", paddingLeft: "0px" }}>
            <Jumbotron style={jumbotron} className="text-center">
              <h1 style={{ fontSize: "60px" }}>
                Swipe <b>right.</b>
              </h1>
              <h1 style={{ fontSize: "60px" }}>
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
            <h1>FIND YOUR PET'S MATCH</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Landing;
