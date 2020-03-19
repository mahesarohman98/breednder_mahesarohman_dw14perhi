import React from "react";
import Col from "react-bootstrap/Col";
import data from "../MyData.js";
import Image from "react-bootstrap/Image";
import { IoMdAddCircle, IoMdCloseCircle } from "react-icons/io";

function multiUpload() {
  const imageMatch = {
    marginTop: "20px",
    marginRight: "20px",
    ZIndex: "-1"
  };

  const imageFont = {
    position: "absolute",
    right: "50px",
    bottom: "0px",
    color: "#cc0000",
    fontSize: "35px"
  };

  const emptyImage = {
    marginTop: "20px",
    marginRight: "10px",
    width: "100px",
    height: "170px",
    borderRadius: "5px",
    backgroundColor: "gray"
  };

  const emptyLogo = {
    position: "absolute",
    right: "6.5vh",
    bottom: "0px",
    color: "#cc0000",
    fontSize: "35px"
  };

  const { image } = data.pet;
  // const sizeInsertImage = image.length;

  const insert = [0, 1, 2, 3, 4, 5];
  // insert.slice(0, sizeInsertImage);

  return (
    <>
      {insert.map(index => {
        return (
          <>
            {image[index] ? (
              <Col md={4} sm={4} xs={6}>
                <Image
                  src={image[index]}
                  alt={index}
                  width="100"
                  height="170"
                  rounded
                  style={imageMatch}
                />
                <a style={imageFont}>
                  <IoMdCloseCircle />
                </a>
              </Col>
            ) : (
              <Col md={4} sm={4} xs={6}>
                <div style={emptyImage}>
                  <a style={emptyLogo}>
                    <IoMdAddCircle />
                  </a>
                </div>
              </Col>
            )}
          </>
        );
      })}
    </>
  );
}

export default multiUpload;
