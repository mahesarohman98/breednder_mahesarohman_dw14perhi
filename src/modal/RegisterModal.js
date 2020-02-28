import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { IoMdCloseCircle } from "react-icons/io";

import { Link } from "react-router-dom";

function RegisterModal(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const { data, loading } = props.species;
  console.log(props.ages.data);

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
  return (
    <>
      <Button variant="flat" size="xxl" onClick={() => setModalShow(true)}>
        Register
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
              Register
            </Col>
          </Row>
        </Modal.Header>

        <Modal.Body className="text-center">
          <Form>
            <Form.Group controlId="formBreeder">
              <Form.Control type="text" placeholder="Breeder" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formPhoneBreeder">
              <Form.Control type="text" placeholder="Phone Breeder" />
            </Form.Group>
            <Form.Group controlId="formAddressBreeder">
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Address Breeder"
              />
            </Form.Group>
            <Form.Group controlId="formNamePet">
              <Form.Control type="text" placeholder="Name Pet" />
            </Form.Group>
            <Form.Group controlId="formGenderPet">
              <Form.Control as="select">
                <option value="" selected disable>
                  Gender Pet
                </option>
                <option>Male</option>
                <option>Female</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formSpeciesPet">
              <Form.Control as="select">
                <option value="" selected disable>
                  Species Pet
                </option>
                {data.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formAgePet">
              <Form.Control as="select">
                <option value="" selected disable>
                  Ages Pet
                </option>
                {props.ages.data.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Link to="/dashboard">
              <Button variant="flat" className="text-center">
                Submit
              </Button>
            </Link>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
// export default RegisterModal;

const mapStateToProps = state => {
  return {
    species: state.species,
    ages: state.ages
  };
};

export default connect(mapStateToProps)(RegisterModal);
