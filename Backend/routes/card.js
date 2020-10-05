"use strict";

const express = require("express");
const CardController = require("../controllers/card");
const router = express.Router();
const multipart = require("connect-multiparty");

// hace un paso intermedio para poder guardar los archivos y tratarlos
const md_upload = multipart({ uploadDir: "./upload/cards" });

router.get("/prueba", CardController.prueba);

module.exports = router;
