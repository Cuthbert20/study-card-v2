const express = require("express");
const massive = require("massive");
const app = express();
const session = require("express-session");
require("dotenv").config();
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const ctrl = "./controller.js";

app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 2
    }
  })
);

//endpoints

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  app.listen(SERVER_PORT, () =>
    console.log(`${SERVER_PORT}, is now up and listening`)
  );
});
// app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is now listening`));
