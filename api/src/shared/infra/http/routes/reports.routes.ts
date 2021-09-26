import { Router } from "express";

import { CreateReportController } from "@modules/reports/useCases/createReport/CreateReportController"
import { EditReportController } from "@modules/reports/useCases/editReport/EditReportController"
import { DeleteReportController } from "@modules/reports/useCases/deleteReport/DeleteReportController"
import { ListReportController } from "@modules/reports/useCases/listReports/ListReportController.ts"

const createReportController = new CreateReportController();
const editReportController = new EditReportController()
const deleteReportController = new DeleteReportController()
const listReportController = new ListReportController()

const reportsRoutes = Router();

reportsRoutes.post("/", createReportController.handle);
reportsRoutes.put("/:id", editReportController.handle);
reportsRoutes.delete("/:id", editReportController.handle);
reportsRoutes.get("/", listReportController.handle);



export { reportsRoutes };
