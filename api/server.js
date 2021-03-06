const express = require("express");
const helmet = require("helmet");
const apiRouter = require("./api-router.js");
const configureMiddleware = require("./configure-middleware.js");

const server = express();
const session = require("express-session");
const knexSessionStore = require("connect-session-knex")(session);

const sessionOptions = {
  name: "Conan",
  secret: "keep it secret",
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false,
    httpOnly: false
  },
  resave: false,
  saveUninitialized: false,

  store: new knexSessionStore({
    knex: require("../database/dbConfig"),
    tablename: "session",
    sidfieldname: "sid",
    createtable: true,
    clearInterval: 1000 * 60 * 60
  })
};

configureMiddleware(server);

server.use(helmet());
server.use(express.json());
server.use(session(sessionOptions));

server.use("/api", apiRouter);
server.get("/", (req, res) => {
  res.send("<h1>Hi from heroku<h1>");
});
module.exports = server;
