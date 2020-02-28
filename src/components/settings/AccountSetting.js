import React, { useState, useEffect } from "react";
import { getUser } from "../../_actions/users";
import { connect } from "react-redux";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import data from "../../MyData.js";

function AccountSetting(props) {
  const [mailValue, setMailValue] = useState(props.email);
  const [phoneValue, setPhoneValue] = useState(props.phone);

  useEffect(() => {
    if (props.email == null && props.phone == null) {
    } else {
      setMailValue(props.email);
      setPhoneValue(props.phone);
    }
  }, [props.email, props.phone]);
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
            placeholder={props.email}
            value={mailValue}
            onChange={e => setMailValue(e.target.value)}
          />
        </Form.Group>
        <hr />
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder={props.phone}
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
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(getUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountSetting);
