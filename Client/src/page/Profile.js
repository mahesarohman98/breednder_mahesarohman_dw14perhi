import React, { userState, useEffect } from "react";
import { connect } from "react-redux";
import { getPets, getUserPets } from "../_actions/pets";
import { getAuthUser } from "../_actions/auth";

import { Container, Row, Col, Button } from "react-bootstrap";
import LeftMenu from "../components/left_menu/LeftMenu";
import AccountSetting from "../components/settings/AccountSetting";
import DiscoverySetting from "../components/settings/DiscoverySetting";
import ProfileCard from "../components/card/ProfileCard";
import AddPetModal from "../modal/AddPetModal";

function App({ getAuthUser, getUserPets, auth, pets }) {
  useEffect(() => {
    getUserPets();
    getAuthUser();
    if (window.matchMedia("(min-width: 768px)").matches) {
      document.getElementById("leftMenu").style.display = "block";
    } else {
      document.getElementById("leftMenu").style.display = "none";
    }
  }, []);
  const [matches, setMatches] = React.useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  const match = {
    padding: "7px",
    borderBottom: "3px Solid #cc0066",
    color: "white",
    textShadow: "2px 2px 10px #000000"
  };

  window.matchMedia("(min-width: 768px)").addListener(e => {
    setMatches(e.matches);
  });

  return (
    <>
      <AddPetModal />
      <LeftMenu
        headerName="setting"
        container={
          <>
            <Col style={{ padding: "0px" }}>
              <AccountSetting />
              <DiscoverySetting />
            </Col>
          </>
        }
      />

      <Container style={{ marginTop: "39px" }}>
        <Row>
          <Col md={6} sm={2} xs={1} />
          <Col>
            <ProfileCard />
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
    species: state.species
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAuthUser: () => dispatch(getAuthUser()),
    getUserPets: () => dispatch(getUserPets())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
