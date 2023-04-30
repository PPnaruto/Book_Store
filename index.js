var express = require('express');
var cors = require('cors');
var app = express();
app.use(express.json());
app.use(cors());
app.listen(8080, function () {
    console.log("server is running on http://localhost:8080");
});
