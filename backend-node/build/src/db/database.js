"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class database {
    constructor() {
        this.connectDB();
    }
    connectDB() {
        const sequelize = new sequelize_1.Sequelize("wearvibe", "root", "root", {
            host: "localhost",
            dialect: "mysql",
        });
        sequelize
            .authenticate()
            .then(() => {
            console.log("Connection has been established successfully.");
        })
            .catch((error) => {
            console.error("Unable to connect to the database: ", error);
        });
        // Define a model
        const brand = sequelize.define("brand", {
            // Model attributes go here
            brand_id: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                unique: true, // Ensures  unique
            },
            name: {
                type: sequelize_1.DataTypes.STRING
            },
            description: {
                type: sequelize_1.DataTypes.STRING
            },
            // ... other fields ...
        });
    }
}
exports.default = database;
