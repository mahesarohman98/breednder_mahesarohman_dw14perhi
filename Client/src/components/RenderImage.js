import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getMatchStatus } from "../_actions/match";

import data from "../MyData.js";
import { Col, Image } from "react-bootstrap";

function RenderImage(props) {
  useEffect(() => {
    const token = localStorage.getItem("token");
  }, []);

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
  if (props.match.data.length > 0) {
    return (
      <>
        {props.match.data.map((item, index) => (
          <>
            <Col md={4} xs={6}>
              <Image
                src={image[index].image}
                alt={image[index].name}
                width="100%"
                height="90%"
                rounded
                style={imageMatch}
              />
              <a style={imageFont}>{item.pet.name}</a>
            </Col>
          </>
        ))}
      </>
    );
  } else {
    return <></>;
  }
}

// export default RenderImage;

const mapStateToProps = state => {
  return {
    pets: state.pets,
    auth: state.auth,
    match: state.match
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMatchStatus: (petId, status, token) =>
      dispatch(getMatchStatus(petId, status, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderImage);
