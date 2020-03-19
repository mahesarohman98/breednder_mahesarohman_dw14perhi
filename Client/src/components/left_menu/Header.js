import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import ProfileImage from "./ProfileImage";
import data from "../../MyData.js";
import { useHistory } from "react-router-dom";

import { setSelectedPet, getUserPets } from "../../_actions/pets";

function Header({ auth, pets, headerName, setSelectedPet }) {
  const [display, setDisplay] = useState("block");

  useEffect(() => {
    document.getElementById("leftMenu").style.display = "block";
  }, []);

  if (pets.callSelected == true) {
    setSelectedPet(0);
  }
  function burgerHandler() {
    document.getElementById("leftMenu").style.display = "none";
  }
  let history = useHistory();

  const LeftHead = {
    paddingTop: "2%",
    backgroundColor: "#cc0066",
    paddingBottom: "2%",
    color: "white"
  };
  if (headerName === "index") {
    return (
      <>
        <Col style={LeftHead}>
          <Row>
            <Col xs={8} ms={8}>
              <a
                onClick={() => history.push("/profile")}
                style={{ marginLeft: "4px", cursor: "pointer" }}
              >
                <ProfileImage /> {"  "}
                <b>{pets.selectedPet.name}</b>
                <IoIosArrowDown />
              </a>
            </Col>
            <Col className="text-right">
              <Button
                style={{ backgroundColor: "#cc0066" }}
                variant="danger"
                onClick={() => burgerHandler()}
              >
                X
              </Button>
            </Col>
          </Row>
        </Col>
      </>
    );
  } else if (headerName === "setting") {
    return (
      <Col style={LeftHead}>
        <Row>
          <Col xs={8} ms={8}>
            <IoIosArrowBack
              onClick={() => history.push("/dashboard")}
              style={{
                fontSize: "30px",
                marginRight: "20px",
                cursor: "pointer"
              }}
            />
            <ProfileImage />
            <a style={{ marginLeft: "10px" }}>
              <b>{pets.selectedPet.name}</b>
            </a>
          </Col>
          <Col className="text-right">
            <Button
              style={{ backgroundColor: "#cc0066" }}
              variant="danger"
              onClick={() => burgerHandler()}
            >
              X
            </Button>
          </Col>
        </Row>{" "}
      </Col>
    );
  }
}

// export default Header;

const mapStateToProps = state => {
  return {
    pets: state.pets,
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedPet: num => dispatch(setSelectedPet(num)),
    getUserPets: () => dispatch(getUserPets())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
