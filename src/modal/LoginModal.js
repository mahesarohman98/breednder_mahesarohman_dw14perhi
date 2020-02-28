import React, { useEffect } from "react";
import { connect } from "react-redux";
import { postLogin } from "../_actions/auth";
import { getPets, setUserPets } from "../_actions/pets";

import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { IoMdCloseCircle } from "react-icons/io";

import { useHistory } from "react-router-dom";

function LoginModal(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [emailValue, setEmailValue] = React.useState("janedoe23@gmail.com");
  const [passwordValue, setPasswordValue] = React.useState("123456");

  const [log, setLog] = React.useState("");

  let history = useHistory();

  useEffect(() => {
    if (props.auth.data.id != null) {
      if (props.auth.loading == false) {
        localStorage.setItem("token", props.auth.data.token);
        localStorage.setItem("userId", props.auth.data.id);
        props.getPets(props.auth.data.token);
        history.push("/dashboard");
      } else {
        setLog("Username or Password wrong");
      }
    }
  });

  const closeButton = {
    color: "#cc0000",
    fontSize: "30px",
    cursor: "pointer"
  };

  const header = {
    display: "block",
    // alignItems: 'none'
    borderBottom: "0px"
  };

  const handleClick = e => {
    // e.preventDefault;
    props.postLogin({ emailValue, passwordValue });
  };
  return (
    <>
      <Button
        variant="flat"
        className="justify-content-end"
        onClick={() => setModalShow(true)}
      >
        login
      </Button>

      <Modal
        {...props}
        size="g"
        show={modalShow}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={header}>
          <Row>
            <Col xs={12} className="text-right">
              <IoMdCloseCircle
                style={closeButton}
                onClick={() => setModalShow(false)}
              />
            </Col>
            <Col xs={12} className="text-center" style={{ fontSize: "40px" }}>
              Login
            </Col>
          </Row>
        </Modal.Header>

        <Modal.Body className="text-center">
          <h5 style={{ color: "red" }}>{log}</h5>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="flat"
              className="text-center"
              onClick={() => props.postLogin({ emailValue, passwordValue })}
            >
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

// export default LoginModal;

const mapStateToProps = state => {
  return {
    auth: state.auth,
    pets: state.pets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postLogin: user => dispatch(postLogin(user)),
    getPets: token => dispatch(getPets(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
