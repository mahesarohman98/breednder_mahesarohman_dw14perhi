import React, { userState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LeftMenu from "../components/left_menu/LeftMenu";
import AccountSetting from "../components/settings/AccountSetting";
import DiscoverySetting from "../components/settings/DiscoverySetting";
import AddPetCard from "../components/card/AddPetCard";

function App() {
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

  useEffect(() => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      document.getElementById("leftMenu").style.display = "block";
    } else {
      document.getElementById("leftMenu").style.display = "none";
    }
  }, []);

  return (
    <>
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
          <Col md={6} xs={1}></Col>
          <Col>
            <AddPetCard />
          </Col>
          <Col xs={1}></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
