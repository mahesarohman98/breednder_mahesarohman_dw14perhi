import React, { userState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "./Header";

function LeftMenu(props) {
  const [matches, setMatches] = React.useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  const [display, setDisplay] = React.useState("");

  const leftMenu = {
    backgroundColor: "#f1f1f1",
    position: "fixed",
    height: "100%",
    display: "block",
    zIndex: 100,
    padding: 0
  };

  const burger = {
    position: "fixed",
    top: 10,
    left: 0,
    zIndex: 99
  };
  function burgerHandler() {
    document.getElementById("leftMenu").style.display = "block";
  }

  return (
    <>
      <Button
        style={{ bakgroundColor: "#cc0066" }}
        variant="danger"
        style={burger}
        onClick={() => burgerHandler()}
      >
        <GiHamburgerMenu />
      </Button>

      <Container id="leftMenu" fluid="md">
        <Row>
          <Col md={4} sm={4} xs={8} style={leftMenu}>
            <Header headerName={props.headerName} myDisplay={display}></Header>
            <Col
              style={{
                overflow: "scroll",
                height: "90%",
                scrollbarWidth: "none"
              }}
            >
              <Row>{props.container}</Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default LeftMenu;
