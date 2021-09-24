import { getRepository, Repository } from "typeorm";

import { IAuthorsRepository } from "@modules/authors/repositories/IAuthorsRepository";

import { Author } from "../entities/Author";

class AuthorsRepository implements IAuthorsRepository {
  private repository: Repository<Author>;

  constructor() {
    this.repository = getRepository(Author);
  }

  async create({
    name,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password,
      avatar,
      id,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export { AuthorsRepository };
