require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

const routes = require("./src/routes/routes");
const PORT = process.env.PORT;

const connectDB = require("./src/database/database");
connectDB();

app.set("view engine", "ejs");
<<<<<<< HEAD
=======

>>>>>>> 42fa72101a0ed0464694fbf63843891551e7bb96
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
