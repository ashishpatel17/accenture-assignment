import { Application } from "express";
import dashboardRoutes from "./dashboard.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api/dashboard", dashboardRoutes);
  }
}
