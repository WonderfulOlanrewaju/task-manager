"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let port = process.env.PORT || 9090;
process.env.NODE_ENV ?
    app_1.app.listen(9090, () => console.log(`API running on port ${port}`)) : null;
//# sourceMappingURL=server.js.map