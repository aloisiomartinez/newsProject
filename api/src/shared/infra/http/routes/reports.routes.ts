import { Router } from "express";

const reportsRoutes = Router();

reportsRoutes.get("/", () => console.log("oi"));

export { reportsRoutes };
