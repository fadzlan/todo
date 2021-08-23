import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1629734800092 implements MigrationInterface {
    name = 'migration1629734800092'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "task" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "completed" boolean NOT NULL DEFAULT (0), "authorId" integer NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "temporary_task" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "completed" boolean NOT NULL DEFAULT (0), "authorId" integer NOT NULL, CONSTRAINT "FK_30cb9d78297c1f2a2e07df1a616" FOREIGN KEY ("authorId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_task"("id", "name", "completed", "authorId") SELECT "id", "name", "completed", "authorId" FROM "task"`);
        await queryRunner.query(`DROP TABLE "task"`);
        await queryRunner.query(`ALTER TABLE "temporary_task" RENAME TO "task"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" RENAME TO "temporary_task"`);
        await queryRunner.query(`CREATE TABLE "task" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "completed" boolean NOT NULL DEFAULT (0), "authorId" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "task"("id", "name", "completed", "authorId") SELECT "id", "name", "completed", "authorId" FROM "temporary_task"`);
        await queryRunner.query(`DROP TABLE "temporary_task"`);
        await queryRunner.query(`DROP TABLE "task"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
