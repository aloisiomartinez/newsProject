import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { Author } from "@modules/authors/infra/typeorm/entities/Author";

@Entity("report")
class Report {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Author)
  @JoinColumn({ name: "author_id" })
  author: Author;

  @Column()
  author_id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @Column()
  deleted_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Report };
