import dog1 from "./image/dog1.jpg";
import dog2 from "./image/dog2.jpg";
import dog3 from "./image/dog3.jpg";
import dog4 from "./image/dog4.jpg";
import dog5 from "./image/dog5.jpg";
import dog6 from "./image/dog6.jpg";
import dog7 from "./image/dog7.jpg";
import dog8 from "./image/dog8.jpg";
import dog9 from "./image/dog9.jpg";
import cat1 from "./image/cat1.jpg";
import cat2 from "./image/cat2.jpg";
import cat3 from "./image/cat3.jpg";
import cat4 from "./image/cat4.jpg";
import cat5 from "./image/cat5.jpg";
import cat6 from "./image/cat6.jpg";
import cat7 from "./image/cat7.jpg";

export default {
  breeder: {
    name: "Mahesa Rohman",
    mail: "mahesarohman30@gmail.com",
    password: "password",
    phone: "082164250000",
    address: "Jl William iskandar, Kisaran",
    maximumDistance: "10"
  },
  pet: {
    name: "Gary",
    gender: "Male",
    species: "Dog",
    age: "Adult",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: [dog1, dog2],
    match: [
      { name: "Jack", image: dog3 },
      { name: "Lorem", image: dog4 },
      { name: "Ipsum", image: dog5 },
      { name: "Dolor", image: dog6 },
      { name: "Sit", image: dog7 },
      { name: "Amet", image: dog8 },
      { name: "consectetur", image: cat1 },
      { name: "Adipiscing", image: cat2 },
      { name: "Sed", image: cat3 },
      { name: "Eiusmod", image: cat4 },
      { name: "Dolore", image: cat5 }
    ]
  }
};
