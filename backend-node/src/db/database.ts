import { Sequelize, DataTypes } from "sequelize";

class database {
  constructor() {
    this.connectDB();
  }

  connectDB() {
    const sequelize = new Sequelize("wearvibe", "root", "root", {
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
        type: DataTypes.STRING,
        allowNull: false, // Makes the field required
        unique: true, // Ensures  unique
      },
      name: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      // ... other fields ...
    });
  }
}
export default database;
