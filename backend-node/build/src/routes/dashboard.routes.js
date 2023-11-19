"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboard_controller_1 = __importDefault(require("../controllers/dashboard.controller"));
class dashboardRoutes {
    constructor(dbSequalize) {
        this.router = (0, express_1.Router)();
        this.controller = new dashboard_controller_1.default(dbSequalize);
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get("/stats/:id", this.controller.getDashboardData);
        this.router.get("/getStores", this.controller.getStoreList);
        this.router.get("/getStoreRevenue/:storeId/:year", this.controller.getTotalRevenue);
    }
}
exports.default = dashboardRoutes;
