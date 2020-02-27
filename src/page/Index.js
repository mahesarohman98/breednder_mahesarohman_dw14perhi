import React, { userState, useEffect } from "react";
import { connect } from "react-redux";
import { getPets } from "../_actions/pets";

import { Container, Row, Col, Button } from "react-bootstrap";
import LeftMenu from "../components/left_menu/LeftMenu";
import RenderImage from "../components/RenderImage";
import Deck from "../components/card/Deck";

function App(props) {
  const [matches, setMatches] = React.useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  const [left, setLeft] = React.useState(
    window.matchMedia("(min-width: 768px)").matches ? "866.5px" : "123.5px"
  );
  const [bottom, setBottom] = React.useState(
    window.matchMedia("(min-width: 768px)").matches ? "116px" : "50px"
  );
  const [petName, setPetName] = React.useState();

  var coba;
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const token = localStorage.getItem("token");
    props.getPets(token);
  }, []);

  props.pets.data.map((item, index) => {
    if (userId == item.breeder.id) coba = item.name;
  });

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
        petName={coba}
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

// export default App;
const mapStateToProps = state => {
  return {
    pets: state.pets,
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPets: token => dispatch(getPets(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
