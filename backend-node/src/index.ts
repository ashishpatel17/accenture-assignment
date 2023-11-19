import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import Routes from "./routes";
import database from "./db/database";

export default class Server {
  
  constructor(app: Application) {
    (async ()=>{
      this.config(app);
      await this.setServer(app);
    })();
  }

  private async setServer(app:any){
    let db = new database();
    let dbSequalize = await db.connectDB();
    new Routes(app,dbSequalize);
  }

  private config(app: Application): void {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }
}
