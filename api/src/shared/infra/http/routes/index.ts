import { Router } from "express";

import { reportsRoutes } from "./reports.routes";

const router = Router();

router.use("/news", reportsRoutes);

export { router };
