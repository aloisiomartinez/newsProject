import { Report } from "../infra/typeorm/entities/Report";

interface IReportsRepository {
  create(author_id: string, title: string, description: string): Promise<Report>;
  findById(id: string): Promise<Report>;
  delete(id: string): Promise<void>;
  update(id: string, title: string, description: string): Promise<Report>;
  getAllReports(): Promise<Report[]>;
}

export { IReportsRepository };
