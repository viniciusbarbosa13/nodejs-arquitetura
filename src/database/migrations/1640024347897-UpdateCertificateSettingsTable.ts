import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class UpdateCertificateSettingsTable1640024347897
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'certificate-settings',
      new TableColumn({
        name: 'certificateId',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'certificate-settings',
      new TableForeignKey({
        columnNames: ['certificateId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'certificate',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('certificate-settings', 'certificateId');
  }
}
