import { getRepository, Repository, getManager } from "typeorm";

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

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async getAllReports(): Promise<Report[]> {
    const getClient = getManager();

		return await getClient.query(
			`SELECT * 
			FROM author
			INNER JOIN report
      on author.id = report.author_id
			`,
		);
  }

  async update(id: string, title: string, description: string): Promise<Report> {
    const report = await this.repository.findOne({ id });
    
    return this.repository.save({
      ...report,
      title,
      description
    })
  }
}

export { ReportsRepository };
