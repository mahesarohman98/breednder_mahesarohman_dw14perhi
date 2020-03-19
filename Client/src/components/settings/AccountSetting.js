import React, { useState, useEffect } from "react";
import { getAuthUser } from "../../_actions/auth";
import { connect } from "react-redux";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import data from "../../MyData.js";

function AccountSetting({ getAuthUser, auth }) {
  const [mailValue, setMailValue] = useState();
  const [phoneValue, setPhoneValue] = useState();
  const [flag, setFlag] = useState(false);

  if (auth.authUser == null) {
    getAuthUser();
  } else if (auth.authUser.email != null && flag == false) {
    setMailValue(auth.authUser.email);
    setPhoneValue(auth.authUser.phone);
    setFlag(true);
  }
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
  return (
    <>
      <Col style={leftPanelHeader}>
        <h4>Account Setting</h4>
      </Col>
      <Col style={leftPanel}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder={auth.authUser.email}
            value={mailValue}
            onChange={e => setMailValue(e.target.value)}
          />
        </Form.Group>
        <hr />
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder={auth.authUser.phone}
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
    users: state.users,
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAuthUser: () => dispatch(getAuthUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountSetting);
