"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
// import {express} from "express";
var cors = require('cors');
var db_1 = require("./Db/db");
var Router_1 = require("./Router/Router");
var app = express();
app.use(express.json());
app.use(cors());
app.use('/books', Router_1.default);
app.get('/', function (req, res) {
    res.send("welcome");
});
(0, db_1.default)()
    .then(function () {
    try {
        app.listen(8080, function () {
            console.log("server is running on http://localhost:8080");
        });
    }
    catch (err) {
        console.error(err.message);
    }
});
