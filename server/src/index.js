"use strict";
exports.__esModule = true;
var express_1 = require("express");
require("dotenv/config");
var cors_1 = require("cors");
var index_1 = require("./routes/index");
var app = (0, express_1["default"])();
var port = process.env.PORT;
app.use(cors_1["default"]);
app.get("/", function (req, res) {
    res.send("Hello World");
});
app.use("/user", index_1.user);
app.listen(port, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at https://localhost:".concat(port));
});
