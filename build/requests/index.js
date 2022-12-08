"use strict";
exports.__esModule = true;
exports.instance = void 0;
var axios_1 = require("axios");
var instance = axios_1["default"].create({
    baseURL: "http://localhost:4000",
    timeout: 6000
});
exports.instance = instance;
