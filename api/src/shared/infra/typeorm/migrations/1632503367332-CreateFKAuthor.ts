import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateFKAuthor1632503367332 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createForeignKey(
			"report",
			new TableForeignKey({
				name: "FKAuthor",
				referencedTableName: "author",
				referencedColumnNames: ["id"],
				columnNames: ["author_id"],
				onDelete: "NO ACTION",
				onUpdate: "NO ACTION",
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey("report", "FKAuthor");
	}

}
