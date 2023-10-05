import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import Routes from "./routes";
import database from "./db/database";

export default class Server {
  
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
    // new database();
  }

  private config(app: Application): void {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }
}
