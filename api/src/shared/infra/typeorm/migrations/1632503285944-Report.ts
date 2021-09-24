import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Report1632503285944 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
			new Table({
				name: "report",
                columns: [
                    {
                      name: "id",
                      type: "uuid",
                      isPrimary: true,
                    },
                    {
                        name: "author_id",
                        type: "uuid",
                    },
                    {
                      name: "title",
                      type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                      name: "deleted_at",
                      type: "timestamp",
                      default: "now()",
                    },
                  ],
			})
		);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("report");

    }

}
