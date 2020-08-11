"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = express_1.default();
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({
    extended: true
}));
exports.app.get("/", (req, res) => {
    return res.status(200).json({
        message: "todo API homepage",
    });
});
exports.app.all("*", (req, res) => {
    return res.status(404).json({
        message: "Route does not exist!"
    });
});
//# sourceMappingURL=app.js.map