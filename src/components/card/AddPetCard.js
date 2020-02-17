import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import MultiUploadAddPet from "../MultiUploadAddPet";
import { useHistory } from "react-router-dom";

function AddPetCard() {
  let history = useHistory();

  const handleClick2 = () => {
    history.push("/profile");
  };

  return (
    <Card
      style={{
        boxShadow:
          "0 12.5px 100px -10px rgba(255, 204, 230, 1),0 10px 10px -10px rgba(26, 0, 13, 1)"
      }}
    >
      <Container>
        <Row style={{ marginLeft: "0px", marginRight: "0px" }}>
          <MultiUploadAddPet />
        </Row>
      </Container>

      <Card.Body className="text-left">
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name Pet</Form.Label>
            <Form.Control type="text" placeholder="Pet name" />
          </Form.Group>
          <Form.Group controlId="formGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control type="text" placeholder="Pet Gender" />
          </Form.Group>

          <Form.Group controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" placeholder="Pet Age" />
          </Form.Group>

          <Form.Group controlId="formAbout">
            <Form.Label>About</Form.Label>
            <Form.Control as="textarea" rows="4" placeholder="Pet About" />
          </Form.Group>
          <div className="text-center">
            <Button variant="flat" onClick={() => handleClick2()}>
              Add Pet
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default AddPetCard;
