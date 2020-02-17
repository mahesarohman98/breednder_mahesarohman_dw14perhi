import React from "react";
import Col from "react-bootstrap/Col";
import { IoMdAddCircle, IoMdCloseCircle } from "react-icons/io";

function multiUploadAddPet() {
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
    right: "3.5vh",
    bottom: "0px",
    color: "#cc0000",
    fontSize: "35px"
  };

  const insert = [0, 1, 2, 3, 4, 5];

  return (
    <>
      {insert.map(index => (
        <>
          <Col md={4} xs={6}>
            <div style={emptyImage}>
              <a style={emptyLogo}>
                <IoMdAddCircle />
              </a>
            </div>
          </Col>
        </>
      ))}
    </>
  );
}

export default multiUploadAddPet;
