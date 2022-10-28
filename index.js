require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const { client } = require("./db");

const app = express();
const PORT = 3000;

client.connect();

const apiRouter = require("./api");

// Middleware
app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});
// Router
app.use("/api", apiRouter);
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
