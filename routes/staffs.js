const express = require("express");
const route = express.Router();
const { get_all,manager } = require("../controllers/staffs_controller");
route.get("/", get_all).get("/manager",manager);
module.exports = route;
