import { Report } from "../infra/typeorm/entities/Report";

interface IReportsRepository {
  create(author_id: string, title: string, description: string): Promise<Report>;
}

export { IReportsRepository };
