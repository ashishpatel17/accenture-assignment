import { Router } from "express";
import DashboardController from "../controllers/dashboard.controller";

class dashboardRoutes {
  router = Router();
  controller = new DashboardController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/stats/:id", this.controller.getDashboardData);
  }
}

export default new dashboardRoutes().router;
