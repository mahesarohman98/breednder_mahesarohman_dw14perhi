import React, { useState } from "react";
import { connect } from "react-redux";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import data from "../../MyData.js";

function AccountSetting(props) {
  const [mailValue, setMailValue] = useState(data.breeder.mail);
  const [phoneValue, setPhoneValue] = useState(data.breeder.phone);
  const leftPanelHeader = {
    color: "#cc0066",
    paddingTop: "30px",
    paddingBottom: "5px",
    backgroundColor: "#ffe6f2"
  };

  const leftPanel = {
    paddingTop: "20px",
    paddingBottom: "1px",
    backgroundColor: "white"
  };
  const inputVal = {};
  return (
    <>
      <Col style={leftPanelHeader}>
        <h4>Account Setting</h4>
      </Col>
      <Col style={leftPanel}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder={data.breeder.mail}
            value={mailValue}
            onChange={e => setMailValue(e.target.value)}
          />
        </Form.Group>
        <hr />
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder={data.breeder.phone}
            value={phoneValue}
            onChange={e => setPhoneValue(e.target.value)}
          />
        </Form.Group>
      </Col>
    </>
  );
}
const mapStateToProps = state => {
  return {
    pets: state.pets,
    auth: state.auth
  };
};
export default connect(mapStateToProps)(AccountSetting);
