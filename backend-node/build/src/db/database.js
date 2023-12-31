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
const sequelize_1 = require("sequelize");
const store_model_1 = __importDefault(require("./model/store.model"));
const storerevenue_model_1 = __importDefault(require("./model/storerevenue.model"));
class database {
    constructor() {
    }
    connectDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sequelize = new sequelize_1.Sequelize("analytics", "root", "root", {
                    host: "localhost",
                    dialect: "mysql",
                });
                yield sequelize.authenticate();
                console.log("Connection has been established successfully.");
                (0, store_model_1.default)(sequelize);
                (0, storerevenue_model_1.default)(sequelize);
                return sequelize;
            }
            catch (error) {
                console.error("Unable to connect to the database: ", error);
                throw error;
            }
        });
    }
}
exports.default = database;
