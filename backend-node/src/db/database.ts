import { Sequelize, DataTypes } from "sequelize";
import store from "./model/store.model";
import storerevenue from "./model/storerevenue.model";


class database {
  
  constructor() {
    
  }

  async connectDB() {
    try {

      const sequelize = new Sequelize("analytics", "root", "root", {
        host: "localhost",
        dialect: "mysql",
      });

      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
   
      
      store(sequelize);
      storerevenue(sequelize);

      
      return sequelize;
      
    } catch (error) {
      console.error("Unable to connect to the database: ", error);
      throw error;
    }
  }
}
export default database;
