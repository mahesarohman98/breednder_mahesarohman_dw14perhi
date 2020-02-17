import React from "react";
import Image from "react-bootstrap/Image";
// import { useHistory } from "react-router-dom";

import cat from "../../image/dog2.jpg";

function ProfileImage() {
  //   let history = useHistory();

  const profileImage = {
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: "2px",
    cursor: "pointer"
  };
  //   onClick={() => history.push("/profile")}

  return (
    <Image
      src={cat}
      Width="45"
      height="45"
      style={profileImage}
      roundedCircle
    />
  );
}

export default ProfileImage;
