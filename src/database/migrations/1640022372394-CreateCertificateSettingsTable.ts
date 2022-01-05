import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class CreateCertificateSettingsTable1640022372394
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'certificate-settings',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'progressPercentage',
            type: 'decimal',
          },
          {
            name: 'courseApprovalPercentage',
            type: 'decimal',
          },
        ],
      }),
    );

    await queryRunner.addColumn(
      'certificate',
      new TableColumn({
        name: 'certificateSettingsId',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'certificate',
      new TableForeignKey({
        columnNames: ['certificateSettingsId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'certificate-settings',
        onDelete: 'CASCADE',
      }),
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('certificate', 'certificateSettingsId');
    await queryRunner.dropTable('certificate-settings');
  }
}
