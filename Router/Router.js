"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
var Controller_1 = require("../Controller/Controller");
router.get('/', Controller_1.getAllBooks);
router.post('/', Controller_1.AddBook);
// router.patch('/:id',UpdateBook)
// router.delete('/:id',DeleteBook)
exports.default = router;
