import React from "react";
import data from "../MyData.js";
import { Col, Image } from "react-bootstrap";

function RenderImage() {
  const imageMatch = {
    ZIndex: "-1"
  };

  const imageFont = {
    position: "absolute",
    bottom: "25px",
    left: "20px",
    width: "70px",
    height: "20px",
    color: "white"
  };

  const image = data.pet.match;
  return (
    <>
      {image.map(index => (
        <>
          <Col md={4} xs={6}>
            <Image
              src={index.image}
              alt={index.name}
              width="100%"
              height="90%"
              rounded
              style={imageMatch}
            />
            <a style={imageFont}>{index.name}</a>
          </Col>
        </>
      ))}
    </>
  );
}

export default RenderImage;
