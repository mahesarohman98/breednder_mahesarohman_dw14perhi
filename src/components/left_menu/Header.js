import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import ProfileImage from "./ProfileImage";
import data from "../../MyData.js";
import { useHistory } from "react-router-dom";

function Header(props) {
  const [display, setDisplay] = useState("block");
  const [petName, setPetname] = useState("petName");
  // const user = props.pets.data[1].find(x => x.id === '1'));
  console.log(props.auth.data.id);

  // console.log(props.pets.data[0], "asdkjfhasdkjhkjhasdfjhk");

  useEffect(() => {
    document.getElementById("leftMenu").style.display = "block";
    // props.getPets();
  }, []);

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
  //   onClick={() => history.push("/profile")}
  //   onClick={() => history.push("/dashboard")}

  if (props.headerName === "index") {
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
                <b>{props.petName}</b>
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
  } else if (props.headerName === "setting") {
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
              <b>{props.petName}</b>
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

export default connect(mapStateToProps)(Header);
