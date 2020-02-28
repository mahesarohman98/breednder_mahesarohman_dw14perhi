import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import { useHistory } from "react-router-dom";

import data from "../../MyData.js";

function DiscoverySetting(props) {
  const [value, setValue] = useState(data.breeder.maximumDistance);
  let history = useHistory();
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
        <h4>Discovery Setting</h4>
      </Col>
      <Col style={leftPanel}>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Maximum Distance: {value} km</Form.Label>
          <RangeSlider
            variant="danger"
            max="10"
            value={value}
            onChange={changeEvent => setValue(changeEvent.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Age</Form.Label>
          <Form.Control as="select">
            <option>Adult</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Species</Form.Label>
          <Form.Control as="select">
            {props.species.map((item, index) => {
              return (
                <>
                  {item.name == props.data.species.name ? (
                    <option key={index} selected="selected">
                      {item.name}
                    </option>
                  ) : (
                    <option key={index}>{item.name}</option>
                  )}
                </>
              );
            })}
          </Form.Control>
        </Form.Group>
        <div className="text-center">
          <Button variant="flat" onClick={() => history.push("/")}>
            Logout
          </Button>
        </div>
        <br />
      </Col>
    </>
  );
}

export default DiscoverySetting;
