const express = require("express");
const massive = require("massive");
const app = express();
const session = require("express-session");
require("dotenv").config();

app.use(express.json());

//endpoints
