import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCertificate1638967014849 implements MigrationInterface {
  name?: string | undefined;
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'certificate',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'image',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'courseName',
            type: 'varchar',
          },
          {
            name: 'studentName',
            type: 'varchar',
          },
          {
            name: 'dateConclusionStudent',
            type: 'timestamp',
          },
          {
            name: 'dateConclusionCourse',
            type: 'timestamp',
          },
          {
            name: 'studentId',
            type: 'varchar',
          },
          {
            name: 'courseId',
            type: 'varchar',
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
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('certificate');
  }
}
