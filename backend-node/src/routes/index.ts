import { Application } from "express";
import dashboardRoutes from "./dashboard.routes";

export default class Routes {
  constructor(app: Application,dbSequalize:any) {
    let dashRouter = new dashboardRoutes(dbSequalize);
    app.use("/api/dashboard", dashRouter.router);
  }
}
