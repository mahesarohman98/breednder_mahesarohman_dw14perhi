import React, { useEffect } from "react";
import { Modal, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import { FiCamera } from "react-icons/fi";

function AddPetModal(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  let history = useHistory();
  const handleClick = () => {
    setModalShow(false);
    setModalShow2(true);
    setTimeout(function() {
      history.push("/add-pet");
    }, 3000);
  };

  const closeButton = {
    color: "#cc0000",
    fontSize: "30px",
    cursor: "pointer"
  };

  const header = {
    display: "block",
    borderBottom: "0px",
    backgroundColor: "rgb(255, 230, 242)"
  };

  const cssmodal = {
    backgroundColor: "rgb(255, 230, 242)"
  };

  return (
    <>
      <Button
        variant="flat"
        onClick={() => setModalShow(true)}
        style={{ position: "fixed", right: "20px", top: "20px", zIndex: "200" }}
      >
        Add Pet
      </Button>
      <Modal
        size="g"
        show={modalShow2}
        onHide={() => setModalShow2(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="text-center">
          Terima Kasih Silahkan Tunggu Konfirmasi Pembayaran!
        </Modal.Body>
      </Modal>

      <Modal
        {...props}
        size="lg"
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
              Premium
            </Col>{" "}
          </Row>
        </Modal.Header>

        <Modal.Body className="text-center" style={cssmodal}>
          <Row>
            <Col xs={2} />
            <Col xs={8}>
              <h5>Upgrade Breednder mu dan nikmati</h5>
              <h5>
                fitur fitur <b>Pro</b>
              </h5>
              <br></br>
              <h5>
                <b>Breednder : 0821642500000</b>
              </h5>
              <br></br>
              <Form>
                <Form.Group controlId="formNoRek">
                  <Form.Control type="text" placeholder="No Rekening Kamu" />
                </Form.Group>

                <Form.Group
                  controlId="formUploadFile"
                  style={{
                    fontSize: "150px",
                    backgroundColor: "white",
                    padding: "20"
                  }}
                >
                  <Form.Control style={{ display: "none" }} type="file" />
                  <Form.Label>
                    <FiCamera />
                    <p style={{ fontSize: "20px" }}>Upload Bukti Transfer</p>
                  </Form.Label>
                  <Form.Control style={{ display: "none" }} type="file" />
                </Form.Group>
                <Button
                  variant="flat"
                  className="text-center"
                  onClick={() => handleClick()}
                >
                  Upload
                </Button>
              </Form>
            </Col>
            <Col xs={2} />
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddPetModal;
