import { inject, injectable } from "tsyringe";

import { Report } from "@modules/reports/infra/typeorm/entities/Report";
import { IAuthorsRepository } from "@modules/authors/repositories/IAuthorsRepository";
import { Author } from "@modules/authors/infra/typeorm/entities/Author";

import { IReportsRepository } from "@modules/reports/repositories/IReportsRepository";

import { AppError } from "@shared/errors/AppError";


@injectable()
class ListReportUseCase {
  constructor(
    @inject("AuthorsRepository")
    private authorsRepository: IAuthorsRepository,
    @inject("ReportsRepository")
    private reportsRepository: IReportsRepository
  ) {}

  async execute(): Promise<Report[]> {
    const reports = await this.reportsRepository.getAllReports();
   
    if(!reports) {
      throw new AppError("No report found!", 404);
    }

    return reports;
  }
}

export { ListReportUseCase };
