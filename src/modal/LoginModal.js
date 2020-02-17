import React, { useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { IoMdCloseCircle } from "react-icons/io";

import { useHistory } from "react-router-dom";

function LoginModal(props) {
  const [modalShow, setModalShow] = React.useState(false);

  let history = useHistory();

  useEffect(() => {
    localStorage.setItem("isLogin", false);
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

  const handleClick = () => {
    localStorage.setItem("isLogin", true);
    history.push("/dashboard");
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
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button
              variant="flat"
              className="text-center"
              onClick={() => handleClick()}
            >
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;
