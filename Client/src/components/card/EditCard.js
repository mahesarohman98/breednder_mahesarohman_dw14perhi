import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getPets, setUserPets, updateUsers } from "../../_actions/pets";
import { getSpecies } from "../../_actions/species";
import { getAges } from "../../_actions/ages";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MultiUpload from "../MultiUpload";
import { useHistory } from "react-router-dom";

function EditCard({
  species,
  auth,
  pets,
  ages,
  getSpecies,
  getAges,
  updateUsers
}) {
  let history = useHistory();
  const [namePetValue, setNamePetValue] = useState();
  const [breederNameValue, setBreederNamePetValue] = useState();
  const [genderValue, setGenderValue] = useState();
  const [ageValue, setAgeValue] = useState();
  const [aboutValue, setAboutValue] = useState();
  const genderName = ["Male", "Female"];
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    getSpecies();
    getAges();
    setFlag(true);
  }, []);

  if (
    flag == true &&
    auth.authUser.name != null &&
    pets.selectedPet.name != null
  ) {
    setNamePetValue(pets.selectedPet.name);
    setBreederNamePetValue(auth.authUser.name);
    setGenderValue(pets.selectedPet.gender);
    setAgeValue(pets.selectedPet.ageId);
    setAboutValue(pets.selectedPet.about);
    setFlag(false);
  }

  const handleClick2 = () => {
    const userId = 6;
    const id = pets.selectedPet.id;
    const pet = {
      namePetValue,
      genderValue,
      userId,
      ageValue,
      aboutValue
    };
    updateUsers(pet, id);
    history.push("/dashboard");
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
              placeholder={pets.selectedPet.name}
              value={namePetValue}
              onChange={e => setNamePetValue(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBreeder">
            <Form.Label>Breeder</Form.Label>
            <Form.Control
              type="text"
              placeholder={auth.authUser.name}
              value={breederNameValue}
              onChange={e => setBreederNamePetValue(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              onChange={e => setGenderValue(e.target.value)}
            >
              {genderName.map((item, index) => {
                return (
                  <>
                    {item == pets.selectedPet.gender ? (
                      <option key={index} value={item} selected="selected">
                        {item}
                      </option>
                    ) : (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    )}
                  </>
                );
              })}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              as="select"
              onChange={e => setAgeValue(e.target.value)}
            >
              {ages.data.map((item, index) => {
                return (
                  <>
                    {item.id == pets.selectedPet.ageId ? (
                      <option key={index} value={item.id} selected="selected">
                        {item.name}
                      </option>
                    ) : (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    )}
                  </>
                );
              })}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formAbout">
            <Form.Label>About</Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              placeholder={pets.selectedPet.about}
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
    species: state.species,
    auth: state.auth,
    pets: state.pets,
    ages: state.ages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPets: token => dispatch(getPets(token)),
    updateUsers: (pet, token, id) => dispatch(updateUsers(pet, id)),
    getAges: () => dispatch(getAges()),
    getSpecies: () => dispatch(getSpecies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCard);
