import { Request, Response } from "express";
import fs from "fs";
import { parse } from "path";

export default class DashboardController {
  
  async getDashboardData(req: Request, res: Response) {
    try {
      let dataKey:any = {
        "dashboardStats":"dashboardStatistics",
        "revenue":"totalRevenue",
        "topSales":"topSalesItem",
        "categorySales":"salesByCategory",
        "storeRevenue":"storeRevenue",
        "productStocks":"productStocks"
      }

      let fileData:any; 
      let objKey:any = dataKey[req.params.id];
      fileData = JSON.parse(fs.readFileSync("./data.json",{ encoding: 'utf8' }));
      res.status(201).json({
        data: fileData.dashoardData[objKey]
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({message: "Internal Server Error!"});
    }
  }

  
}
