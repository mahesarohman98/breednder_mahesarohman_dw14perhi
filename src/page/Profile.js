import React, { userState, useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../_actions/users";
// import { getPets } from "../_actions/pets";
import { Container, Row, Col, Button } from "react-bootstrap";
import LeftMenu from "../components/left_menu/LeftMenu";
import AccountSetting from "../components/settings/AccountSetting";
import DiscoverySetting from "../components/settings/DiscoverySetting";
import ProfileCard from "../components/card/ProfileCard";
import AddPetModal from "../modal/AddPetModal";

function App(props) {
  const [matches, setMatches] = React.useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  const data = props.pets.userPet;
  var petId;
  data.map((item, index) => {
    if (index == 0) petId = item.name;
  });
  const match = {
    padding: "7px",
    borderBottom: "3px Solid #cc0066",
    color: "white",
    textShadow: "2px 2px 10px #000000"
  };

  window.matchMedia("(min-width: 768px)").addListener(e => {
    setMatches(e.matches);
  });

  useEffect(() => {
    const id = localStorage.getItem("userId");
    props.getUser(id);
    if (window.matchMedia("(min-width: 768px)").matches) {
      document.getElementById("leftMenu").style.display = "block";
    } else {
      document.getElementById("leftMenu").style.display = "none";
    }
  }, []);

  return (
    <>
      <AddPetModal />
      <LeftMenu
        headerName="setting"
        petName={petId}
        container={
          <>
            <Col style={{ padding: "0px" }}>
              <AccountSetting
                email={props.users.data.email}
                phone={props.users.data.phone}
              />
              <DiscoverySetting
                data={props.pets.userPet[0]}
                species={props.species.data}
              />
            </Col>
          </>
        }
      />

      <Container style={{ marginTop: "39px" }}>
        <Row>
          <Col md={6} sm={2} xs={1} />
          <Col>
            <ProfileCard data={props.pets.userPet[0]} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

// export default App;
const mapStateToProps = state => {
  return {
    pets: state.pets,
    auth: state.auth,
    species: state.species,
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(getUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
