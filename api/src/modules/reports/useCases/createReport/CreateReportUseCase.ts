import { inject, injectable } from "tsyringe";

import { Report } from "@modules/reports/infra/typeorm/entities/Report";
import { IAuthorsRepository } from "@modules/authors/repositories/IAuthorsRepository";
import { Author } from "@modules/authors/infra/typeorm/entities/Author";

import { IReportsRepository } from "@modules/reports/repositories/IReportsRepository";

interface IRequest {
  author_name: string;
  title: string;
  description: string;
}

@injectable()
class CreateReportUseCase {
  constructor(
    @inject("AuthorsRepository")
    private authorsRepository: IAuthorsRepository,
    @inject("ReportsRepository")
    private reportsRepository: IReportsRepository
  ) {}

  async execute({
    author_name,
    title,
    description,
  }: IRequest): Promise<Report> {
    const author: Author = await this.authorsRepository.create(
      author_name
    );
  
    const report = await this.reportsRepository.create(
      author.id,
      title,
      description,
    );

    return report
  }
}

export { CreateReportUseCase };
