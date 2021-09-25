import { inject, injectable } from "tsyringe";

import { Report } from "@modules/reports/infra/typeorm/entities/Report";
import { IAuthorsRepository } from "@modules/authors/repositories/IAuthorsRepository";

import { IReportsRepository } from "@modules/reports/repositories/IReportsRepository";

import { AppError } from "@shared/errors/AppError";

@injectable()
class DeleteReportUseCase {
  constructor(
    @inject("AuthorsRepository")
    private authorsRepository: IAuthorsRepository,
    @inject("ReportsRepository")
    private reportsRepository: IReportsRepository
  ) {}

  async execute(id: string): Promise<Report> {
    const findReport = await this.reportsRepository.findById(id);

    if (!findReport) {
      throw new AppError("Report not found!", 404);
    }

    await this.reportsRepository.delete(id);

    return;
  }
}

export { DeleteReportUseCase };
