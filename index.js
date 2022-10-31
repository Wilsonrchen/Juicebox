require("dotenv").config();
const path = require("path");
const express = require("express");
const morgan = require("morgan");

const { client } = require("./db");

const app = express();
const PORT = 8080;

client.connect();

const apiRouter = require("./api");

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./client", "dist")));

app.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});
// Router
app.use("/api", apiRouter);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "./client/dist", "index.html"));
});

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

app.get("/background/:color", (req, res, next) => {
  res.send(`
    <body style="background: ${req.params.color};">
      <h1>Hello World</h1>
    </body>
  `);
});

app.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
