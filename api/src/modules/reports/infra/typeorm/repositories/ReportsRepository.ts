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

  async findById(id: string): Promise<Report> {
    return await this.repository.findOne(id);
  }

  async update(id: string, title: string, description: string): Promise<Report> {
    const report = await this.repository.findOne({ id });

		await this.repository
			.createQueryBuilder()
			.update(report)
			.set({ title, description})
			.where("id = :id", { id })
			.execute();

		return report;
  }
}

export { ReportsRepository };
