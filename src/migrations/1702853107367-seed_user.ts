import { MigrationInterface, QueryRunner } from 'typeorm';
import bcrypt from 'bcrypt';

export class SeedUser1702853107367 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const passwordHash = await bcrypt.hash('123456', 12);
    await queryRunner.query(
      `INSERT INTO "user" ("username", "email", "password") VALUES ('johndoe', 'johndoe@domain.com', '${passwordHash}')`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "user" WHERE "username" = 'johndoe'`);
  }
}
