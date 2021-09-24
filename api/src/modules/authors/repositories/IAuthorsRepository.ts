import { Author } from "../infra/typeorm/entities/Author";

interface IAuthorsRepository {
  create(name: string, email: string): Promise<Author>;
  findByName(name: string): Promise<Author>;
}

export { IAuthorsRepository };
