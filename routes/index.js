const express = require('express');

//Import the moduler router for /api and html

const apiRouter = require("./apiRoutes");
const htmlRouter = require("./htmlRoutes");

const app =express();


app.use("/api", apiRouter);
app.use("/", htmlRouter);

module.exports = app;

