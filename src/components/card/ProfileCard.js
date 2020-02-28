import React from "react";

import { IoMdMale, IoMdFemale } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { FaMapMarker } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useHistory } from "react-router-dom";

import data from "../../MyData.js";

function ProfileCard(props) {
  let history = useHistory();
  console.log(props.data);

  const handleClick2 = () => {
    history.push("/edit");
  };

  return (
    <Card
      style={{
        width: "18rem",
        boxShadow:
          "0 12.5px 100px -10px rgba(255, 204, 230, 1),0 10px 10px -10px rgba(26, 0, 13, 1)"
      }}
    >
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="200px"
            width="auto"
            src={data.pet.image[0]}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="200px"
            width="auto"
            src={data.pet.image[1]}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      <Card.Body className="text-left">
        <Row>
          <Col>
            <h4 style={{ color: "#cc0066" }}>{props.data.name}</h4>
          </Col>
          <Col className="text-right" style={{ color: "#666666" }}>
            {data.pet.species}
          </Col>
        </Row>
        <Card.Text style={{ color: "#1a000d" }}>
          <GoPerson />{" "}
          <a style={{ color: "#666666" }}>{props.data.breeder.name}</a>
          <br></br>
          <FaMapMarker />{" "}
          <a style={{ color: "#666666" }}>
            {data.breeder.maximumDistance} Kilometer dari sini
          </a>
          <br></br>
          <IoMdMale />{" "}
          <a style={{ color: "#666666" }}>
            {props.data.gender} - {props.data.age.name}
          </a>
          <br></br>
          <MdPhone />{" "}
          <a style={{ color: "#666666" }}>
            Phone Breeder : {data.breeder.phone}
          </a>
        </Card.Text>
        <h5 style={{ color: "#cc0066" }}>About Pet</h5>
        <p>
          {" "}
          <p>{props.data.about}</p>
        </p>
        <div className="text-center">
          <Button variant="flat" onClick={() => handleClick2()}>
            Edit
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
