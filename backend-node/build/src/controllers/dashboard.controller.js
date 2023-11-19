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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const sequelize_1 = require("sequelize");
class DashboardController {
    constructor(dbSequalize) {
        this.getStoreList = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let stores = yield this.databaseSequalize.models.store.findAll({
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                });
                res.status(201).json({
                    data: stores,
                });
            }
            catch (err) {
                console.log(err);
                res
                    .status(500)
                    .json({ errMessage: err, message: "Internal Server Error!" });
            }
        });
        this.getTotalRevenue = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let revenue = yield this.databaseSequalize.models.storerevenue.findAll({
                    where: {
                        store_id: req.params.storeId,
                        year: req.params.year
                    },
                    group: ["month"],
                    attributes: [['store_id', 'storeId'], 'month', [sequelize_1.Sequelize.fn('SUM', sequelize_1.Sequelize.col('amount')), 'totalRevenue']]
                });
                let response = {};
                if (revenue && revenue.length > 0) {
                    revenue.map((v) => {
                        response[v.month] = parseInt(v.dataValues.totalRevenue);
                    });
                }
                res.status(201).json({
                    data: response,
                });
            }
            catch (err) {
                console.log(err);
                res
                    .status(500)
                    .json({ errMessage: err, message: "Internal Server Error!" });
            }
        });
        this.databaseSequalize = dbSequalize;
    }
    getDashboardData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let dataKey = {
                    dashboardStats: "dashboardStatistics",
                    revenue: "totalRevenue",
                    topSales: "topSalesItem",
                    categorySales: "salesByCategory",
                    storeRevenue: "storeRevenue",
                    productStocks: "productStocks",
                };
                let fileData;
                let objKey = dataKey[req.params.id];
                fileData = JSON.parse(fs_1.default.readFileSync("./data.json", { encoding: "utf8" }));
                res.status(201).json({
                    data: fileData.dashoardData[objKey],
                });
            }
            catch (err) {
                console.log(err);
                res
                    .status(500)
                    .json({ errMessage: err, message: "Internal Server Error!" });
            }
        });
    }
}
exports.default = DashboardController;
