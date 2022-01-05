import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateCertificateTable1640024661832 implements MigrationInterface {
  name?: string;
  down(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'alter table "certificate" alter column "certificateSettingsId" drop not null',
    );
    await queryRunner.query(
      'alter table "certificate-settings" alter column "certificateId" drop not null',
    );
  }
}
