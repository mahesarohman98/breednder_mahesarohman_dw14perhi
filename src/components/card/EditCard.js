import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getPets, setUserPets, updateUsers } from "../../_actions/pets";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MultiUpload from "../MultiUpload";
import { useHistory } from "react-router-dom";

function EditCard(props) {
  let history = useHistory();
  const [namePetValue, setNamePetValue] = useState();
  const [breederNameValue, setBreederNamePetValue] = useState();
  const [genderValue, setGenderValue] = useState();
  const [ageValue, setAgeValue] = useState();
  const [aboutValue, setAboutValue] = useState();

  const petdata = props.pets.userPet;
  var petId;
  // var userPet;
  petdata.map((item, index) => {
    if (index == 0) {
      petId = item;
      if (namePetValue == null) {
        setNamePetValue(item.name);
        setBreederNamePetValue(item.breeder.name);
        setGenderValue(item.gender);
        setAgeValue(item.age.name);
        setAboutValue(item.about);
      }
    }
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (props.pets == null) {
      props.getPets(token);
    }
  }, []);

  const handleClick2 = () => {
    const token1 = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const data = {
      namePetValue,
      genderValue,
      userId,
      ageValue,
      aboutValue
    };
    updateUsers(data, token1, petId.id);
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
              placeholder={petId.name}
              value={namePetValue}
              onChange={e => setNamePetValue(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBreeder">
            <Form.Label>Breeder</Form.Label>
            <Form.Control
              type="text"
              placeholder={petId.breeder.name}
              value={breederNameValue}
              onChange={e => setBreederNamePetValue(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              placeholder={petId.gender}
              value={genderValue}
              onChange={e => setGenderValue(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              placeholder={petId.age.name}
              value={ageValue}
              onChange={e => setAgeValue(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formAbout">
            <Form.Label>About</Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              placeholder={petId.about}
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

// export default EditCard;
const mapStateToProps = state => {
  return {
    pets: state.pets,
    auth: state.auth,
    species: state.species,
    ages: state.ages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPets: token => dispatch(getPets(token)),
    setUserPets: item => dispatch(setUserPets(item)),
    updateUsers: (data, token, id) => dispatch(updateUsers(data, token, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCard);
