import { inject, injectable } from "tsyringe";

import { Report } from "@modules/reports/infra/typeorm/entities/Report";
import { IAuthorsRepository } from "@modules/authors/repositories/IAuthorsRepository";
import { Author } from "@modules/authors/infra/typeorm/entities/Author";

import { IReportsRepository } from "@modules/reports/repositories/IReportsRepository";

import { AppError } from "@shared/errors/AppError";

interface IRequest {
  author_name: string;
  title: string;
  description: string;
}

@injectable()
class CreateReportUseCase {
  constructor(
    @inject("ReportsRepository")
    private reportsRepository: IReportsRepository,
    @inject("AuthorsRepository")
    private authorsRepository: IAuthorsRepository
  ) {}

  async execute({
    author_name,
    title,
    description,
  }: IRequest): Promise<Report> {
    const author: Author = await this.authorsRepository.findByName(
      author_name
    );

    if (!author) {
      throw new AppError("User does not exists!");
    }

    const report = await this.reportsRepository.create({
      user.id,
      title,
      description,
    });

    return report;
  }
}

export { CreateReportUseCase };
