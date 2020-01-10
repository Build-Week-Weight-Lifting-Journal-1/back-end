const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

var corsOptions = {
  credentials: true
};

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(cors(corsOptions));
};