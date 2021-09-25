import { Router } from "express";

import { CreateReportController } from "@modules/reports/useCases/createReport/CreateReportController"

const createReportController = new CreateReportController()
const reportsRoutes = Router();

reportsRoutes.post("/", createReportController.handle);

export { reportsRoutes };
