"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dashboard_routes_1 = __importDefault(require("./dashboard.routes"));
class Routes {
    constructor(app, dbSequalize) {
        let dashRouter = new dashboard_routes_1.default(dbSequalize);
        app.use("/api/dashboard", dashRouter.router);
    }
}
exports.default = Routes;
