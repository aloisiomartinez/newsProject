import { getRepository, Repository } from "typeorm";

import { IReportsRepository } from "@modules/reports/repositories/IReportsRepository";

import { Report } from "../entities/Report";

class ReportsRepository implements IReportsRepository {
  private repository: Repository<Report>;

  constructor() {
    this.repository = getRepository(Report);
  }

  async create(
    author_id: string,
    title: string,
    description: string
  ): Promise<Report> {
    const report = this.repository.create({
      author_id,
      title,
      description
    });

    await this.repository.save(report);

    return report;
  }
}

export { ReportsRepository };
