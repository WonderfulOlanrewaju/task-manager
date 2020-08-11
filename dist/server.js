"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
let port = process.env.PORT || 9090;
app_1.app.listen(9090, () => console.log(`API running on port ${port}`));
//# sourceMappingURL=server.js.map