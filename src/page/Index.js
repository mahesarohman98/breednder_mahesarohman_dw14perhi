import React, { userState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LeftMenu from "../components/left_menu/LeftMenu";
import RenderImage from "../components/RenderImage";
import Deck from "../components/card/Deck";
import {
  AiOutlineReload,
  AiOutlineClose,
  AiFillHeart,
  AiFillThunderbolt
} from "react-icons/ai";

function App() {
  const [matches, setMatches] = React.useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  const [left, setLeft] = React.useState(
    window.matchMedia("(min-width: 768px)").matches ? "866.5px" : "123.5px"
  );
  const [bottom, setBottom] = React.useState(
    window.matchMedia("(min-width: 768px)").matches ? "116px" : "50px"
  );

  const match = {
    padding: "7px",
    borderBottom: "3px Solid #cc0066",
    color: "white",
    textShadow: "2px 2px 10px #000000"
  };

  const deckLogo = {
    textAlign: "center",
    fontSize: "40px",
    position: "fixed",
    bottom: bottom,
    left: left,
    cursor: "pointer"
  };

  window.matchMedia("(min-width: 768px)").addListener(e => {
    setMatches(e.matches);
  });

  useEffect(() => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      document.getElementById("leftMenu").style.display = "block";
    } else {
      document.getElementById("leftMenu").style.display = "none";
    }
  }, []);

  return (
    <>
      <LeftMenu
        headerName="index"
        container={
          <>
            <Col style={{ backgroundColor: "#ffe6f2" }}>
              <Col style={{ marginBottom: "17px" }}>
                <a style={match}>
                  <b>Match</b>
                </a>
              </Col>
              <Row>
                <RenderImage />
              </Row>
            </Col>
          </>
        }
      />

      <Container>
        <Row>
          <Col md={4} xs={1} />
          <Col md={12} xs={12} id="swap">
            <Deck />
          </Col>
        </Row>
      </Container>
      {/* <div style={deckLogo}>
        <AiOutlineReload style={{ color: "#3300cc" }} />
        <AiOutlineClose style={{ color: "#cc0000" }} />
        <AiFillHeart style={{ color: "#cc0066" }} />
        <AiFillThunderbolt style={{ color: "#3300cc" }} />
      </div> */}
    </>
  );
}

export default App;
