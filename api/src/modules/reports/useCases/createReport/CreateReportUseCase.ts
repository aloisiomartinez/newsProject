import { inject, injectable } from "tsyringe";

import { Report } from "@modules/reports/infra/typeorm/entities/Report";
import { IAuthorsRepository } from "@modules/authors/repositories/IAuthorsRepository";
import { Author } from "@modules/authors/infra/typeorm/entities/Author";

import { IReportsRepository } from "@modules/reports/repositories/IReportsRepository";

import { AppError } from "@shared/errors/AppError";
import { AuthorsRepository } from "@modules/authors/infra/typeorm/repositories/AuthorsRepository";
import { ReportsRepository } from "@modules/reports/infra/typeorm/repositories/ReportsRepository";

interface IRequest {
  author_name: string;
  title: string;
  description: string;
}

@injectable()
class CreateReportUseCase {
  constructor(
    // @inject("AuthorsRepository")
    // private authorsRepository: IAuthorsRepository,
    // @inject("ReportsRepository")
    // private reportsRepository: IReportsRepository
  ) {}

  async execute({
    author_name,
    title,
    description,
  }: IRequest): Promise<Report> {
    const authorsRepository = new AuthorsRepository();
    const reportsRepository = new ReportsRepository();

    const author: Author = await authorsRepository.create(
      author_name
    );
   

    const report = await reportsRepository.create(
      author.id,
      title,
      description,
    );

    return report

    // return report;
  }
}

export { CreateReportUseCase };
