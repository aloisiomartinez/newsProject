import { Router } from "express";

import { CreateReportController } from "@modules/reports/useCases/createReport/CreateReportController"
import { EditReportController } from "@modules/reports/useCases/editReport/EditReportController"

const createReportController = new CreateReportController();
const editReportController = new EditReportController()

const reportsRoutes = Router();

reportsRoutes.post("/", createReportController.handle);
reportsRoutes.put("/:id", editReportController.handle);

export { reportsRoutes };
