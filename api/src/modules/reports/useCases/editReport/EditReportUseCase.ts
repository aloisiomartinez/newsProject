import { inject, injectable } from "tsyringe";

import { Report } from "@modules/reports/infra/typeorm/entities/Report";
import { IAuthorsRepository } from "@modules/authors/repositories/IAuthorsRepository";
import { Author } from "@modules/authors/infra/typeorm/entities/Author";

import { IReportsRepository } from "@modules/reports/repositories/IReportsRepository";

import { AppError } from "@shared/errors/AppError";

interface IRequest {
  report_id: string;
  author_name: string;
  title: string;
  description: string;
}

@injectable()
class EditReportUseCase {
  constructor(
    @inject("AuthorsRepository")
    private authorsRepository: IAuthorsRepository,
    @inject("ReportsRepository")
    private reportsRepository: IReportsRepository
  ) {}

  async execute({
    report_id,
    author_name,
    title,
    description,
  }: IRequest): Promise<Report> {
    const findReport = await this.reportsRepository.findById(report_id);

    if(!findReport) {
      throw new AppError("Report not found!", 404);
    }

    const author: Author = await this.authorsRepository.findByName(
      author_name
    );

    if(!author) {
      throw new AppError("Author not found!", 404);
    }
   
    return await this.reportsRepository.update(
      report_id,
      title,
      description,
    );
  }
}

export { EditReportUseCase };
