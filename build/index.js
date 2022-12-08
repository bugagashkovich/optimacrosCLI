"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var get_allAutos_1 = require("./requests/get_allAutos");
var get_auto_1 = require("./requests/get_auto");
var post_auto_1 = require("./requests/post_auto");
var readline_1 = require("readline");
var delete_auto_1 = require("./requests/delete_auto");
var put_auto_1 = require("./requests/put_auto");
var rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
var args = process.argv.slice(2);
console.log("__________");
switch (args[0]) {
    // Секция помощи
    case "help":
        console.log("Раздел помощи");
        console.log("_____");
        console.log("getall - Получить все машины без сортировки.");
        console.log("getall {sort}- Получить все машины с сортировкой");
        console.log("Сортировка работает по команде fieldUp или fieldDown");
        console.log("Например brandUp, nameDown etc");
        console.log("Если __v не равен 0, значит у данной машины есть история изменений");
        console.log("_____");
        console.log("get {id}", "Получить машину по id с историей изменений");
        console.log("_____");
        console.log("post - Добавить машину ");
        console.log("_____");
        console.log("put {id} - Обновить машину по id");
        console.log("Система защищена от изменения устаревших данных");
        console.log("_____");
        console.log("delete {id} - Удалить машину с историей изменений по id");
        console.log("Система защищена от удаления устаревших данных");
        rl.close();
        break;
    // Получить все машины или одну по id
    case "getall":
        if (!args[1]) {
            console.log("Все машины без сортировки");
            var exec_1 = function () { return __awaiter(void 0, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, get_allAutos_1.get_allAuto)()];
                        case 1:
                            res = _a.sent();
                            console.table(res.data, [
                                "_id",
                                "brand",
                                "name",
                                "prodDate",
                                "price",
                                "__v",
                            ]);
                            return [2 /*return*/];
                    }
                });
            }); };
            exec_1();
        }
        else {
            console.log("Получить все машины с сортировкой");
            var exec_2 = function (args) { return __awaiter(void 0, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, get_allAutos_1.get_allAuto)(args)];
                        case 1:
                            res = _a.sent();
                            console.table(res.data, [
                                "_id",
                                "brand",
                                "name",
                                "prodDate",
                                "price",
                                "__v",
                            ]);
                            return [2 /*return*/];
                    }
                });
            }); };
            exec_2(args[1]);
        }
        rl.close();
        break;
    // Получить машину по id
    case "get":
        if (!args[1]) {
            console.log("Требуется id");
        }
        else {
            var exec_3 = function (args) { return __awaiter(void 0, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, get_auto_1.get_auto)(args)];
                        case 1:
                            res = _a.sent();
                            if (res.status === 200) {
                                console.table([res.data], ["_id", "status", "brand", "name", "prodDate", "price", "__v"]);
                                console.log("История изменений");
                                console.table(res.data.oldVersions, [
                                    "_id",
                                    "status",
                                    "brand",
                                    "name",
                                    "prodDate",
                                    "price",
                                ]);
                            }
                            else {
                                console.log("Что-то пошло не так");
                                console.log(res.response.data);
                            }
                            return [2 /*return*/];
                    }
                });
            }); };
            exec_3(args[1]);
        }
        rl.close();
        break;
    // Добавить машину
    case "post":
        var data_1 = {
            brand: null,
            price: null,
            name: null,
            prodDate: null
        };
        var exec = function () { return __awaiter(void 0, void 0, void 0, function () {
            var brandQ, nameQ, prodQ, priceQ, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        brandQ = function () {
                            return new Promise(function (resolve) {
                                rl.question("Введите бренд: ", function (answer) {
                                    data_1.brand = answer;
                                    resolve(null);
                                });
                            });
                        };
                        nameQ = function () {
                            return new Promise(function (resolve) {
                                rl.question("Введите название: ", function (answer) {
                                    data_1.name = answer;
                                    resolve(null);
                                });
                            });
                        };
                        prodQ = function () {
                            return new Promise(function (resolve) {
                                rl.question("Введите дату производства в формате YYYY-MM-DD: ", function (answer) {
                                    var _answer = new Date(answer);
                                    console.log(answer);
                                    data_1.prodDate = _answer;
                                    resolve(null);
                                });
                            });
                        };
                        priceQ = function () {
                            return new Promise(function (resolve) {
                                rl.question("Введите стоимость: ", function (answer) {
                                    var _answer = Number(answer);
                                    data_1.price = _answer;
                                    resolve(null);
                                });
                            });
                        };
                        return [4 /*yield*/, brandQ()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, nameQ()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, prodQ()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, priceQ()];
                    case 4:
                        _a.sent();
                        rl.close();
                        return [4 /*yield*/, (0, post_auto_1.post_auto)(data_1)];
                    case 5:
                        res = _a.sent();
                        if (res.status === 200) {
                            console.log("Результат:");
                            console.table([res.data], ["_id", "brand", "name", "prodDate", "price"]);
                        }
                        else {
                            console.log("Что-то пошло не так");
                            console.log(res.response.data);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        exec();
        break;
    // Обновить машину по id
    case "put":
        if (!args[1]) {
            console.log(args[0], "Требуется id");
        }
        else {
            var exec_4 = function () { return __awaiter(void 0, void 0, void 0, function () {
                var res_get, newAuto, brandQ, nameQ, prodQ, priceQ, res_put;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, get_auto_1.get_auto)(args[1])];
                        case 1:
                            res_get = _a.sent();
                            newAuto = {
                                brand: res_get.data.brand,
                                name: res_get.data.name,
                                prodDate: res_get.data.prodDate,
                                price: res_get.data.price
                            };
                            console.log("Данные к изменению");
                            console.table([res_get.data], ["_id", "brand", "name", "prodDate", "price", "__v"]);
                            brandQ = function () {
                                return new Promise(function (resolve) {
                                    rl.question("Введите бренд: ", function (answer) {
                                        if (answer.length) {
                                            newAuto.brand = answer;
                                        }
                                        resolve(null);
                                    });
                                });
                            };
                            nameQ = function () {
                                return new Promise(function (resolve) {
                                    rl.question("Введите название: ", function (answer) {
                                        if (answer.length) {
                                            newAuto.name = answer;
                                        }
                                        resolve(null);
                                    });
                                });
                            };
                            prodQ = function () {
                                return new Promise(function (resolve) {
                                    rl.question("Введите дату производства в формате YYYY-MM-DD: ", function (answer) {
                                        if (answer.length) {
                                            var _answer = new Date(answer);
                                            if (_answer) {
                                                newAuto.prodDate = _answer;
                                            }
                                        }
                                        resolve(null);
                                    });
                                });
                            };
                            priceQ = function () {
                                return new Promise(function (resolve) {
                                    rl.question("Введите стоимость: ", function (answer) {
                                        if (answer.length) {
                                            var _answer = Number(answer);
                                            newAuto.price = _answer;
                                        }
                                        resolve(null);
                                    });
                                });
                            };
                            console.log("Чтобы оставить поле неизменным просто введите Enter");
                            return [4 /*yield*/, brandQ()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, nameQ()];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, prodQ()];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, priceQ()];
                        case 5:
                            _a.sent();
                            rl.close();
                            console.log(newAuto);
                            return [4 /*yield*/, (0, put_auto_1.put_auto)({ id: args[1], data: newAuto })];
                        case 6:
                            res_put = _a.sent();
                            if (res_put.status === 200) {
                                console.log("Результат:");
                                console.table([res_put.data], ["_id", "brand", "name", "price", "prodDate", "__v"]);
                            }
                            else {
                                console.log("Что-то пошло не так");
                                console.log(res_put.response.data);
                            }
                            return [2 /*return*/];
                    }
                });
            }); };
            exec_4();
        }
        break;
    // Удалить машину по id
    case "del":
        if (!args[1]) {
            console.log("Требуется id");
        }
        else {
            console.log("Удалить машину по id");
            var exec_5 = function () { return __awaiter(void 0, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, delete_auto_1.delete_auto)(args[1])];
                        case 1:
                            res = _a.sent();
                            if (res.status === 200) {
                                console.table([res.data]);
                            }
                            else {
                                console.log("Что-то пошло не так");
                                console.log(res.response.data);
                            }
                            return [2 /*return*/];
                    }
                });
            }); };
            exec_5();
        }
        rl.close();
        break;
    default:
        console.log("Что-то пошло не так. Введите help для получения списка команд");
}
