import { container } from "tsyringe";

import "@shared/container/providers";

import { AuthorsRepository } from "@modules/authors/infra/typeorm/repositories/AuthorsRepository";
import { IAuthorsRepository } from "@modules/authors/repositories/IAuthorsRepository";
import { ReportsRepository } from "@modules/reports/infra/typeorm/repositories/ReportsRepository";
import { IReportsRepository } from "@modules/reports/repositories/IReportsRepository";


container.registerSingleton<IAuthorsRepository>(
  "AuthorsRepository",
  AuthorsRepository
);

container.registerSingleton<IReportsRepository>(
  "ReportsRepository",
  ReportsRepository
);


