import { getRepository, Repository } from "typeorm";

import { IAuthorsRepository } from "@modules/authors/repositories/IAuthorsRepository";

import { Author } from "../entities/Author";

class AuthorsRepository implements IAuthorsRepository {
  private repository: Repository<Author>;

  constructor() {
    this.repository = getRepository(Author);
  }

  async create(
    name: string,
  ): Promise<Author> {
    const author = this.repository.create({
      name,
    });

    await this.repository.save(author);

    return author;
  }

  async findByName(name: string): Promise<Author> {
    return await this.repository.findOne({ name });
  }

  async findById(id: string): Promise<Author> {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export { AuthorsRepository };
