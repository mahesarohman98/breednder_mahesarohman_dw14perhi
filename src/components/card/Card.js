import React, { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "react-use-gesture";

import Carousel from "nuka-carousel";
import { Container, Row, Col, Image } from "react-bootstrap";

function Card(props) {
  const [width, setWidth] = React.useState(
    window.matchMedia("(min-width: 768px)").matches ? "120vw" : "90vw"
  );
  const { i, x, y, rot, scale, trans, bind, data } = props;
  const { name, age, distance, text, pics } = data[i];

  return (
    <animated.div
      key={i}
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
        width: width
      }}
    >
      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans)
        }}
      >
        <Container className="card">
          <Row>
            <Col>
              <Carousel>
                {pics.map((pic, index) => (
                  <Image src={pic} key={index} alt="profilePicture" />
                ))}
              </Carousel>
              <h2>{name},</h2>
              <h5>{distance}</h5>
              <h5>{text}</h5>
            </Col>
          </Row>
        </Container>
      </animated.div>
    </animated.div>
  );
}

export default Card;
