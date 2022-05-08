"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
require("dotenv/config");
var index_1 = require("./routes/index");
var app = (0, express_1["default"])();
var port = process.env.PORT;
app.get("/", function (req, res) {
    res.send("Hello World");
});
app.use("/users", index_1.users);
app.listen(port, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at https://localhost:".concat(port));
});
//# sourceMappingURL=index.js.map