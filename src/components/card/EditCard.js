import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import data from "../../MyData.js";
import MultiUpload from "../MultiUpload";
import { useHistory } from "react-router-dom";

function EditCard() {
  let history = useHistory();
  const [namePetValue, setNamePetValue] = useState(data.pet.name);
  const [breederNameValue, setBreederNamePetValue] = useState(
    data.breeder.name
  );
  const [genderValue, setGenderValue] = useState(data.pet.gender);
  const [ageValue, setAgeValue] = useState(data.pet.age);
  const [aboutValue, setAboutValue] = useState(data.pet.about);

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
      <Row style={{ marginLeft: "0px" }}>
        <MultiUpload />
      </Row>
      <Card.Body className="text-left">
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name Pet</Form.Label>
            <Form.Control
              type="text"
              placeholder={data.pet.name}
              value={namePetValue}
              onChange={e => setNamePetValue(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBreeder">
            <Form.Label>Breeder</Form.Label>
            <Form.Control
              type="text"
              placeholder={data.breeder.name}
              value={breederNameValue}
              onChange={e => setBreederNamePetValue(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              placeholder={data.pet.gender}
              value={genderValue}
              onChange={e => setGenderValue(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              placeholder={data.pet.age}
              value={ageValue}
              onChange={e => setAgeValue(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formAbout">
            <Form.Label>About</Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              placeholder={data.pet.about}
              value={aboutValue}
              onChange={e => setAboutValue(e.target.value)}
            />
          </Form.Group>
          <div className="text-center">
            <Button variant="flat" onClick={() => handleClick2()}>
              Save
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default EditCard;
