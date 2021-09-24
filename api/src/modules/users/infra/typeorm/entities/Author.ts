import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("author")
class Author {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Report)
  @JoinColumn({ name: "car_id" })
  report: Report;

  @Column()
  report_id: string;

  @Column()
  name: string;

  @Column()
  start_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Author };
