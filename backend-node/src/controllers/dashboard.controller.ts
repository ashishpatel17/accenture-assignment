import { Request, Response } from "express";
import fs from "fs";
import { parse } from "path";
import {  Sequelize , DataTypes } from "sequelize";

export default class DashboardController {
  databaseSequalize: any;

  constructor(dbSequalize: any) {
    this.databaseSequalize = dbSequalize;
  }

  async getDashboardData(req: Request, res: Response) {
    try {
      let dataKey: any = {
        dashboardStats: "dashboardStatistics",
        revenue: "totalRevenue",
        topSales: "topSalesItem",
        categorySales: "salesByCategory",
        storeRevenue: "storeRevenue",
        productStocks: "productStocks",
      };

      let fileData: any;
      let objKey: any = dataKey[req.params.id];
      fileData = JSON.parse(
        fs.readFileSync("./data.json", { encoding: "utf8" })
      );
      res.status(201).json({
        data: fileData.dashoardData[objKey],
      });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ errMessage: err, message: "Internal Server Error!" });
    }
  }

  getStoreList = async (req: Request, res: Response) => {
    try {
      let stores = await this.databaseSequalize.models.store.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      res.status(201).json({
        data: stores,
      });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ errMessage: err, message: "Internal Server Error!" });
    }
  };

  getTotalRevenue = async (req: Request, res: Response) => {
    try {
      let revenue = await this.databaseSequalize.models.storerevenue.findAll({
        where: {
          store_id: req.params.storeId,
          year: req.params.year
        },
        group:["month"],
        attributes: [['store_id','storeId'],'month',[Sequelize.fn('SUM', Sequelize.col('amount')), 'totalRevenue']]
      });
      let response:any = {};
      if(revenue && revenue.length>0){
        revenue.map((v:any)=>{
          response[v.month] =  parseInt(v.dataValues.totalRevenue);
        })
      }
      res.status(201).json({
        data: response,
      });

    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ errMessage: err, message: "Internal Server Error!" });
    }
  };
}
