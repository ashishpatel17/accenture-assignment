import { Router } from "express";
import DashboardController from "../controllers/dashboard.controller";

class dashboardRoutes {
  router = Router();
  controller:any;

  constructor(dbSequalize:any) {
    this.controller = new DashboardController(dbSequalize);
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/stats/:id", this.controller.getDashboardData);
    this.router.get("/getStores", this.controller.getStoreList);
    this.router.get("/getStoreRevenue/:storeId/:year", this.controller.getTotalRevenue);
  }
}

export default dashboardRoutes;
