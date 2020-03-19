require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.SERVER_PORT;
const cors = require("cors");

const userRoutes = require("./api/v1/routes/users");
const speciesRoutes = require("./api/v1/routes/species");
const agesRoutes = require("./api/v1/routes/ages");
const petRoutes = require("./api/v1/routes/pet");
const myPetRoutes = require("./api/v1/routes/my-pet");
const matchRoutes = require("./api/v1/routes/match");
const paymentRoutes = require("./api/v1/routes/payment");
const authRoutes = require("./api/v1/routes/auth");

app.use(express.json());

app.use(cors());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/species", speciesRoutes);
app.use("/api/v1/ages", agesRoutes);
app.use("/api/v1/pet", petRoutes);
app.use("/api/v1/my-pet", myPetRoutes);
app.use("/api/v1/match", matchRoutes);
app.use("/api/v1/payment", paymentRoutes);

// error handling
app.use((req, res, next) => {
  const error = new Error("not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  if (error.name === "UnauthorizedError") {
    res.status(401).json({ message: "You are not authorized." });
  } else if (error.name === "not founf") {
    res.statis(404).json({ message: "404: Not Found" });
  } else {
    console.log(error);
    next(error);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
