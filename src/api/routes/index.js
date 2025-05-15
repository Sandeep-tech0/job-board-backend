const express = require("express");
const ENDPOINT = "/api/v1";
const jobRoutes = require('./jobRoutes');

module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(ENDPOINT + `/jobs`, jobRoutes);
};
