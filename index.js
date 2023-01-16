require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

const routes = require("./src/routes/routes");
const PORT = process.env.PORT;

const connectDB = require("./src/database/database");
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
